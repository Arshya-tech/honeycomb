import { SavingsChart } from "./savings-chart";

export const SavingsSection = () => {
  return (
    <div className="mb-8 rounded-2xl border-2 border-green-300 bg-gradient-to-br from-green-50 to-green-100/50 p-6 shadow-lg md:p-8">
      <div className="mb-4 flex items-center gap-3">
        <div className="rounded-xl bg-green-200 p-2 shadow-sm">
          <span className="text-2xl">💰</span>
        </div>
        <div>
          <h1 className="font-heading text-2xl font-bold text-green-800">
            Savings
          </h1>
          <p className="text-sm font-medium text-green-700">
            01 - 25 March, 2020
          </p>
        </div>
      </div>
      <div className="mt-6 rounded-xl bg-white/60 p-4 shadow-sm">
        <SavingsChart />
      </div>
    </div>
  );
};
