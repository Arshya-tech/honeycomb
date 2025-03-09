import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/auth";
import { eq } from "drizzle-orm";

import { learningPaths } from "@/config/financial-profile";
import { db } from "@/lib/db";
import { financialProfiles, users } from "@/lib/db/schema";
import { financialProfileSchema } from "@/lib/validations/financial-profile";

export async function POST(req: NextRequest) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser?.id) {
      return NextResponse.json(
        { error: "You must be logged in to create a financial profile" },
        { status: 401 },
      );
    }

    const body = await req.json();

    // Validate the request body
    const validationResult = financialProfileSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: "Invalid request data",
          details: validationResult.error.format(),
        },
        { status: 400 },
      );
    }

    const {
      employmentStatus,
      annualIncome,
      financialGoal,
      riskTolerance,
      knowledgeLevel,
      debtAmount,
      savingsAmount,
      monthlyExpenses,
    } = validationResult.data;

    // Determine the learning path based on the financial goal
    const learningPath =
      learningPaths[financialGoal as keyof typeof learningPaths]?.title ||
      "Custom Path";

    // Create the financial profile
    const now = new Date();
    const [financialProfile] = await db
      .insert(financialProfiles)
      .values({
        id: crypto.randomUUID(),
        userId: currentUser.id,
        employmentStatus,
        annualIncome,
        financialGoal,
        riskTolerance,
        knowledgeLevel,
        debtAmount,
        savingsAmount,
        monthlyExpenses,
        learningPath,
        createdAt: now,
        updatedAt: now,
      })
      .returning();

    // Update the user to mark the financial profile as completed
    // Also award points for completing the profile
    await db
      .update(users)
      .set({
        hasCompletedFinancialProfile: 1,
        points: 100, // Award 100 points for completing the financial profile
      })
      .where(eq(users.id, currentUser.id));

    return NextResponse.json(
      {
        message: "Financial profile created successfully",
        financialProfile,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error creating financial profile:", error);
    return NextResponse.json(
      { error: "Failed to create financial profile" },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser?.id) {
      return NextResponse.json(
        { error: "You must be logged in to view your financial profile" },
        { status: 401 },
      );
    }

    // Get the user's financial profile
    const [financialProfile] = await db
      .select()
      .from(financialProfiles)
      .where(eq(financialProfiles.userId, currentUser.id))
      .limit(1);

    if (!financialProfile) {
      return NextResponse.json(
        { error: "Financial profile not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({ financialProfile }, { status: 200 });
  } catch (error) {
    console.error("Error fetching financial profile:", error);
    return NextResponse.json(
      { error: "Failed to fetch financial profile" },
      { status: 500 },
    );
  }
}
