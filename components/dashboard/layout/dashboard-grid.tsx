import { ReactNode } from "react";

import { SpendingBreakdown } from "../spending/spending-breakdown";
import { SavingsTipsCard } from "../tips/savings-tips-card";

interface DashboardGridProps {
  children: ReactNode;
}

export const DashboardGrid = ({ children }: DashboardGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      {/* Left column - 2/3 width */}
      <div className="lg:col-span-2">{children}</div>

      {/* Right column - 1/3 width */}
      <div className="h-fit space-y-6 rounded-xl border border-b-4 border-gray-200 bg-gray-100 p-4 md:p-6 2xl:p-8">
        <SpendingBreakdown />
        <SavingsTipsCard />
      </div>
    </div>
  );
};
