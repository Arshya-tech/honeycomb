import { redirect } from "next/navigation";
import { getCurrentUser } from "@/auth";
import { eq } from "drizzle-orm";

import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { GamificationHub } from "@/components/dashboard/gamification/gamification-hub";
import { DashboardGrid } from "@/components/dashboard/layout/dashboard-grid";
import { FinancialHealth } from "@/components/dashboard/metrics/financial-health";
import { UserStats } from "@/components/dashboard/profile/user-stats";
import { SavingsSection } from "@/components/dashboard/savings/savings-section";
import { TransactionsSection } from "@/components/dashboard/transactions/transactions-section";

const SAMPLE_BADGES = [
  { label: "Budgeting Pro", color: "bg-pink-400" },
  { label: "Debt Destroyer", color: "bg-orange-400" },
  { label: "Quiz Master", color: "bg-emerald-400" },
];

const FINANCIAL_METRICS = [
  { label: "Savings Rate", value: "25%" },
  { label: "Debt-to-Income Ratio", value: "15%" },
  {
    label: "Monthly Spending vs. Budget",
    value: "$2,000",
    description: "Budget: $2,500",
  },
  { label: "Net Worth", value: "$150,000" },
];

const ACTIVE_CHALLENGES = [
  {
    title: "Save $50 This Week",
    progress: { current: 2, total: 3, type: "Days" },
  },
  {
    title: "Complete Financial Quizzes",
    progress: { current: 1, total: 3, type: "Quizzes" },
  },
];

const DashboardPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    redirect("/sign-in");
  }

  const [userStats] = await db
    .select()
    .from(users)
    .where(eq(users.id, currentUser.id))
    .limit(1);

  return (
    <div className="mx-auto w-full max-w-7xl space-y-8 p-4 md:p-8 xl:p-12">
      {/* User Profile & Stats */}
      <UserStats
        name={userStats.name || "John Doe"}
        level="Level 3 Saver"
        xp={userStats.points || 0}
        badges={SAMPLE_BADGES}
        image={userStats.image}
      />

      <hr className="border-gray-200" />

      {/* Financial Health */}
      <FinancialHealth metrics={FINANCIAL_METRICS} healthScore={85} />

      {/* Gamification Hub */}
      <GamificationHub challenges={ACTIVE_CHALLENGES} />

      <DashboardGrid>
        <SavingsSection />
        <TransactionsSection />
      </DashboardGrid>
    </div>
  );
};

export default DashboardPage;
