"use client";

import { Crown, Home, Target, Wallet, Zap } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";

import { ActiveLearningPath } from "./active-learning-path";
import { FinancialGoalsProgress } from "./financial-goals-progress";
import { FinancialProfileSnapshot } from "./financial-profile-snapshot";

// Enhanced mock data with more comprehensive information
const mockUserData = {
  employmentStatus: "Full-time",
  annualIncome: 75000,
  savingsAmount: 12500,
  debtAmount: 15000,
  monthlyExpenses: 3200,
  financialGoal: "Home Purchase",
  xpToday: 250,
  streakDays: 7,
  learningPath: "Budgeting Basics",
  badges: ["Savings Star", "Budget Master", "Debt Crusher"],
};

const mockGoals = [
  {
    id: "emergency-fund",
    name: "Emergency Fund",
    target: 15000,
    current: 12500,
    icon: <Wallet className="size-4 text-blue-600" />,
    aiRecommendation: "On track! Keep saving $500/month",
  },
  {
    id: "home-down-payment",
    name: "Home Down Payment",
    target: 60000,
    current: 25000,
    icon: <Home className="size-4 text-blue-600" />,
    aiRecommendation: "Increase savings to $1000/month to reach goal by 2026",
  },
  {
    id: "debt-reduction",
    name: "Debt Reduction",
    target: 15000,
    current: 5000,
    icon: <Target className="size-4 text-blue-600" />,
    aiRecommendation: "Consider debt consolidation for better rates",
  },
];

const mockLearningPath = {
  pathName: "Budgeting Basics",
  progress: {
    completed: 3,
    total: 5,
  },
  steps: [
    {
      id: "step-1",
      title: "Understanding Income & Expenses",
      completed: true,
    },
    {
      id: "step-2",
      title: "Creating Your First Budget",
      completed: true,
    },
    {
      id: "step-3",
      title: "Tracking Spending Habits",
      completed: true,
    },
    {
      id: "step-4",
      title: "Adjusting Your Budget",
      completed: false,
    },
    {
      id: "step-5",
      title: "Automating Your Finances",
      completed: false,
    },
  ],
};

const QuickActionButton = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => (
  <Button
    variant="outline"
    className="flex w-full items-center justify-start gap-3 rounded-xl border-2 border-blue-100 bg-white p-4 text-gray-700 transition-all hover:scale-[1.02] hover:bg-blue-50 hover:shadow-md"
  >
    <div className="rounded-lg bg-blue-100 p-2">{icon}</div>
    <span className="text-sm font-semibold">{label}</span>
  </Button>
);

const GamificationStats = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.3 }}
    className="rounded-2xl border-2 border-blue-100 bg-white p-6 shadow-md"
  >
    <div className="mb-3 flex items-center justify-between">
      <h3 className="text-sm font-semibold text-gray-700">
        Today&apos;s Progress
      </h3>
      <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 px-4 py-1.5 shadow-sm transition-transform hover:scale-105">
        <Crown className="size-4 text-white" />
        <span className="text-sm font-bold text-white">
          {mockUserData.streakDays} Day Streak 🔥
        </span>
      </div>
    </div>

    <div className="mt-4 grid grid-cols-2 gap-4">
      <div className="rounded-xl bg-blue-50 p-4 transition-transform hover:scale-105">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-blue-100 p-2">
            <Zap className="size-5 text-blue-600" />
          </div>
          <span className="text-sm font-medium text-gray-700">XP Today</span>
        </div>
        <p className="mt-2 text-2xl font-bold text-blue-600">
          {mockUserData.xpToday}
        </p>
      </div>
      <div className="rounded-xl bg-green-50 p-4 transition-transform hover:scale-105">
        <div className="mb-2 w-fit rounded-lg bg-green-100 p-2">
          <Crown className="size-5 text-green-600" />
        </div>
        <p className="text-sm font-medium text-gray-700">Recent Badge</p>
        <p className="mt-2 text-sm font-bold text-green-600">
          {mockUserData.badges[0]} 🏆
        </p>
      </div>
    </div>
  </motion.div>
);

export const ChatSidebar = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex h-full w-full flex-col gap-6 overflow-y-auto bg-[#f5f8ff] p-6"
    >
      <FinancialProfileSnapshot
        employmentStatus={mockUserData.employmentStatus}
        annualIncome={mockUserData.annualIncome}
        savingsAmount={mockUserData.savingsAmount}
        debtAmount={mockUserData.debtAmount}
        monthlyExpenses={mockUserData.monthlyExpenses}
      />

      <GamificationStats />

      <FinancialGoalsProgress goals={mockGoals} />

      <ActiveLearningPath
        pathName={mockLearningPath.pathName}
        progress={mockLearningPath.progress}
        steps={mockLearningPath.steps}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-2 space-y-2"
      >
        <QuickActionButton
          icon={<Target className="size-4 text-blue-600" />}
          label="Update Financial Goals"
        />
        <QuickActionButton
          icon={<Wallet className="size-4 text-blue-600" />}
          label="Review Budget"
        />
      </motion.div>
    </motion.div>
  );
};
