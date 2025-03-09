import { redirect } from "next/navigation";
import { getCurrentUser } from "@/auth";
import { eq } from "drizzle-orm";

import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { FinancialProfileClient } from "@/components/financial-profile/financial-profile-client";
import { GET } from "@/app/api/financial-profile/recommendations/route";

async function getRecommendations() {
  try {
    const response = await GET();
    const data = await response.json();

    if (!response.ok) {
      console.log("Failed to fetch recommendations", response.status);
      return null;
    }

    return data;
  } catch (error) {
    console.error("Error fetching recommendations:", error);
    return null;
  }
}

export default async function FinancialProfilePage() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    redirect("/login");
  }

  // Get user data including hasCompletedFinancialProfile
  const [userData] = await db
    .select({
      hasCompletedProfile: users.hasCompletedFinancialProfile,
    })
    .from(users)
    .where(eq(users.id, currentUser.id))
    .limit(1);

  let recommendations = null;
  if (userData.hasCompletedProfile) {
    const data = await getRecommendations();
    recommendations = data?.recommendations;
  }

  return <FinancialProfileClient initialRecommendations={recommendations} />;
}
