import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { eq } from "drizzle-orm";

import { learningPaths } from "@/config/financial-profile";
import { db } from "@/lib/db";
import { financialProfiles } from "@/lib/db/schema";

export async function GET() {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "You must be logged in to view recommendations" },
        { status: 401 },
      );
    }

    // Get the user's financial profile
    const [financialProfile] = await db
      .select()
      .from(financialProfiles)
      .where(eq(financialProfiles.userId, session.user.id))
      .limit(1);

    if (!financialProfile) {
      return NextResponse.json(
        {
          error:
            "Financial profile not found. Please complete your profile first.",
        },
        { status: 404 },
      );
    }

    // Get the financial goal from the profile
    const { financialGoal, knowledgeLevel } = financialProfile;

    // Get the learning path based on the financial goal
    const learningPath =
      learningPaths[financialGoal as keyof typeof learningPaths];

    if (!learningPath) {
      return NextResponse.json(
        { error: "Invalid financial goal" },
        { status: 400 },
      );
    }

    // Generate personalized recommendations based on the profile
    const recommendations = {
      learningPath: {
        title: learningPath.title,
        description: learningPath.description,
      },
      challenges: learningPath.challenges.map((challenge) => ({
        title: challenge,
        completed: false,
      })),
      tips: generateTips(
        financialGoal as keyof typeof learningPaths,
        knowledgeLevel,
      ),
      nextSteps: generateNextSteps(financialGoal as keyof typeof learningPaths),
    };

    return NextResponse.json({ recommendations }, { status: 200 });
  } catch (error) {
    console.error("Error generating recommendations:", error);
    return NextResponse.json(
      { error: "Failed to generate recommendations" },
      { status: 500 },
    );
  }
}

// Helper function to generate personalized tips based on the financial goal and knowledge level
function generateTips(
  financialGoal: keyof typeof learningPaths,
  knowledgeLevel: string,
): string[] {
  const commonTips = [
    "Track your expenses regularly to understand your spending patterns.",
    "Set specific, measurable, achievable, relevant, and time-bound (SMART) financial goals.",
    "Build an emergency fund to cover 3-6 months of expenses.",
  ];

  const goalSpecificTips: Record<keyof typeof learningPaths, string[]> = {
    save: [
      "Automate your savings by setting up automatic transfers to your savings account.",
      "Use the 50/30/20 rule: 50% for needs, 30% for wants, and 20% for savings.",
      "Look for ways to reduce recurring expenses like subscriptions.",
    ],
    invest: [
      "Start with low-cost index funds if you're new to investing.",
      "Diversify your investments to reduce risk.",
      "Consider tax-advantaged accounts for long-term investing.",
    ],
    debt: [
      "Focus on high-interest debt first (debt avalanche method).",
      "Consider consolidating high-interest debts.",
      "Avoid taking on new debt while paying off existing debt.",
    ],
    budget: [
      "Use budgeting apps to track your spending automatically.",
      "Review your budget regularly and adjust as needed.",
      "Include occasional treats in your budget to make it sustainable.",
    ],
    financial_literacy: [
      "Read books and articles about personal finance.",
      "Follow reputable financial experts and blogs.",
      "Take free online courses on financial literacy.",
    ],
  };

  // Combine common tips with goal-specific tips
  const tips = [...commonTips, ...goalSpecificTips[financialGoal]];

  // Add knowledge level specific tips
  if (knowledgeLevel === "beginner") {
    tips.push(
      "Start small and focus on building consistent habits.",
      "Don't be afraid to ask questions and seek guidance.",
    );
  } else if (knowledgeLevel === "intermediate") {
    tips.push(
      "Consider working with a financial advisor for personalized advice.",
      "Explore more advanced financial strategies as you build confidence.",
    );
  } else if (knowledgeLevel === "advanced") {
    tips.push(
      "Optimize your tax strategy to maximize your financial efficiency.",
      "Consider more sophisticated investment vehicles like real estate or alternative investments.",
    );
  }

  return tips;
}

// Helper function to generate next steps based on the financial goal
function generateNextSteps(
  financialGoal: keyof typeof learningPaths,
): string[] {
  const commonNextSteps = [
    "Complete your first challenge in the learning path.",
    "Set a specific financial goal with a deadline.",
  ];

  const goalSpecificNextSteps: Record<keyof typeof learningPaths, string[]> = {
    save: [
      "Set up an automatic transfer to your savings account.",
      "Identify three expenses you can reduce or eliminate.",
    ],
    invest: [
      "Research different investment options that align with your goals.",
      "Start with a small investment to get comfortable with the process.",
    ],
    debt: [
      "Make a list of all your debts with their interest rates and minimum payments.",
      "Create a debt repayment plan using either the avalanche or snowball method.",
    ],
    budget: [
      "Track all your expenses for the next week.",
      "Create a monthly budget based on your income and expenses.",
    ],
    financial_literacy: [
      "Learn five new financial terms and concepts this week.",
      "Subscribe to a financial newsletter or podcast.",
    ],
  };

  // Combine common next steps with goal-specific next steps
  return [...commonNextSteps, ...goalSpecificNextSteps[financialGoal]];
}
