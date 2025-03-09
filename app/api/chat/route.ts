import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { eq } from "drizzle-orm";

import { generateFinancialAdvice } from "@/lib/ai/financial-advice";
import { db } from "@/lib/db";
import { financialProfiles } from "@/lib/db/schema";

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json().catch(() => ({}));
    const { message, chatHistory = [] } = body;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required and must be a string" },
        { status: 400 },
      );
    }

    // Get the current user session
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 },
      );
    }

    // Get the user's financial profile from the database
    const profiles = await db
      .select()
      .from(financialProfiles)
      .where(eq(financialProfiles.userId, session.user.id));

    const userFinancialProfile = profiles[0];

    if (!userFinancialProfile) {
      return NextResponse.json({
        response:
          "Please complete your financial profile first to get personalized advice.",
        type: "text",
      });
    }

    // Generate AI response using Gemini with the user's financial profile and chat history
    const result = await generateFinancialAdvice({
      message,
      financialProfile: userFinancialProfile,
      chatHistory,
    });

    // Determine response type and additional data based on message content
    const lowerMessage = message.toLowerCase();
    let responseType = "text"; // Default type
    let additionalData = {};

    // Check for special message patterns to add interactive elements
    if (
      lowerMessage.includes("invest") ||
      lowerMessage.includes("stock") ||
      lowerMessage.includes("market")
    ) {
      // Add achievement for investment questions
      responseType = "achievement";
      additionalData = {
        achievement: {
          title: "Curious Investor",
          description: "Asked your first question about investing",
          xp: 25,
          icon: "🔍",
        },
      };
    } else if (
      lowerMessage.includes("purchase") ||
      lowerMessage.includes("buy") ||
      lowerMessage.includes("car") ||
      lowerMessage.includes("afford") ||
      lowerMessage.includes("budget") ||
      lowerMessage.includes("simulation") ||
      lowerMessage.includes("simulate")
    ) {
      // Determine what item the user is asking about
      let purchaseItem = "purchase";

      // Check for specific items in the message
      const itemKeywords = [
        { keyword: "car", item: "car" },
        { keyword: "house", item: "house" },
        { keyword: "home", item: "home" },
        { keyword: "apartment", item: "apartment" },
        { keyword: "laptop", item: "laptop" },
        { keyword: "computer", item: "computer" },
        { keyword: "phone", item: "phone" },
        { keyword: "vacation", item: "vacation" },
      ];

      for (const { keyword, item } of itemKeywords) {
        if (lowerMessage.includes(keyword)) {
          purchaseItem = item;
          break;
        }
      }

      // Add interactive budget for purchase questions
      responseType = "interactive_budget";
      additionalData = {
        interactiveBudget: {
          question: `Want to see how a $300/mo ${purchaseItem} payment would affect your goals?`,
          controls: [
            { type: "slider", label: "Monthly Payment", min: 100, max: 500 },
            {
              type: "button",
              label: "Simulate 1 Year",
              action: "simulate_purchase",
            },
          ],
          purchaseItem,
        },
      };
    }

    return NextResponse.json({
      response: result.response,
      type: responseType,
      ...additionalData,
    });
  } catch (error) {
    console.error("Error processing chat request:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 },
    );
  }
}
