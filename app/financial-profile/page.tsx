import { redirect } from "next/navigation";
import { getCurrentUser } from "@/auth";
import { eq } from "drizzle-orm";

import { db } from "@/lib/db";
import { financialProfiles } from "@/lib/db/schema";
import { FinancialProfileClient } from "@/components/financial-profile/financial-profile-client";
import { ProfileCheck } from "@/components/financial-profile/profile-check";

async function checkUserProfile(userId: string) {
  try {
    // Check if the user has a financial profile in the database
    const [profile] = await db
      .select()
      .from(financialProfiles)
      .where(eq(financialProfiles.userId, userId))
      .limit(1);

    return !!profile;
  } catch (error) {
    console.error("Error checking financial profile:", error);
    return false;
  }
}

export default async function FinancialProfilePage() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    redirect("/login");
  }

  // Check if the user has already completed their financial profile
  const hasCompletedProfile = await checkUserProfile(currentUser.id);

  // If the profile is already completed, redirect on the server side
  if (hasCompletedProfile) {
    redirect("/dashboard");
  }

  return (
    <>
      {/* Client-side profile check as a fallback */}
      <ProfileCheck hasCompletedProfile={hasCompletedProfile} />

      {/* Main financial profile client component */}
      <FinancialProfileClient />
    </>
  );
}
