"use client";

import { DollarSign, TrendingUp, Wallet } from "lucide-react";
import { motion } from "motion/react";

interface FinancialProfileSnapshotProps {
  employmentStatus: string;
  annualIncome: number;
  savingsAmount: number;
  debtAmount: number;
  monthlyExpenses: number;
}

export const FinancialProfileSnapshot = ({
  employmentStatus,
  annualIncome,
  savingsAmount,
  debtAmount,
  monthlyExpenses,
}: FinancialProfileSnapshotProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
    >
      <h3 className="mb-3 text-sm font-semibold text-gray-700">
        Financial Profile
      </h3>

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-full bg-blue-500/10">
            <Wallet className="size-4 text-blue-600" />
          </div>
          <div>
            <p className="text-xs text-gray-500">Employment</p>
            <p className="text-sm font-medium">{employmentStatus}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-full bg-blue-500/10">
            <DollarSign className="size-4 text-blue-600" />
          </div>
          <div className="flex w-full justify-between">
            <div>
              <p className="text-xs text-gray-500">Annual Income</p>
              <p className="text-sm font-medium">
                ${annualIncome.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Monthly Expenses</p>
              <p className="text-sm font-medium">
                ${monthlyExpenses.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-full bg-blue-500/10">
            <TrendingUp className="size-4 text-blue-600" />
          </div>
          <div className="flex w-full justify-between">
            <div>
              <p className="text-xs text-gray-500">Savings</p>
              <p className="text-sm font-medium">
                ${savingsAmount.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Debt</p>
              <p className="text-sm font-medium">
                ${debtAmount.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
