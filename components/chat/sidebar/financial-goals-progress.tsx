"use client";

import { Target } from "lucide-react";
import { motion } from "motion/react";

interface Goal {
  id: string;
  name: string;
  target: number;
  current: number;
  icon?: React.ReactNode;
  aiRecommendation?: string;
}

interface FinancialGoalsProgressProps {
  goals: Goal[];
}

export const FinancialGoalsProgress = ({
  goals,
}: FinancialGoalsProgressProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
    >
      <h3 className="mb-3 text-sm font-semibold text-gray-700">
        Financial Goals
      </h3>

      <div className="space-y-4">
        {goals.map((goal) => {
          const progressPercentage = Math.min(
            100,
            Math.round((goal.current / goal.target) * 100),
          );

          return (
            <div key={goal.id} className="space-y-2 rounded-lg bg-gray-50 p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {goal.icon || <Target className="size-4 text-blue-600" />}
                  <p className="text-sm font-medium text-gray-700">
                    {goal.name}
                  </p>
                </div>
                <p className="text-xs font-medium text-gray-600">
                  ${goal.current.toLocaleString()} / $
                  {goal.target.toLocaleString()}
                </p>
              </div>

              <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className={`h-full ${
                    progressPercentage >= 80
                      ? "bg-green-500"
                      : progressPercentage >= 50
                        ? "bg-blue-500"
                        : "bg-yellow-500"
                  }`}
                />
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-gray-600">
                  {progressPercentage}% complete
                </span>
                {goal.aiRecommendation && (
                  <span className="font-medium text-blue-600">
                    🤖 {goal.aiRecommendation}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};
