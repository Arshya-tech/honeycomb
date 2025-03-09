import { SavingsChart } from "./savings-chart";

export const SavingsSection = () => {
  return (
    <div className="mb-8 rounded-xl border border-b-4 border-green-500/20 bg-green-500/5 p-4 md:p-8">
      <h1 className="font-heading text-2xl font-bold text-green-900">
        💰 Savings
      </h1>
      <p className="text-sm font-medium text-green-700">01 - 25 March, 2020</p>
      <div className="mt-4">
        <SavingsChart />
      </div>
    </div>
  );
};
