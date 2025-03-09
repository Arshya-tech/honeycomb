interface SpendingCategoryProps {
  category: string;
  amount: number;
  percentage: number;
}

const SpendingCategory = ({
  category,
  amount,
  percentage,
}: SpendingCategoryProps) => {
  return (
    <div className="">
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-semibold text-zinc-800">{category}</span>
        <span className="font-medium text-zinc-600">
          {amount.toLocaleString()}
        </span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-gray-300">
        <div
          className="h-full rounded-full bg-green-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export const SpendingBreakdown = () => {
  const categories = [
    { category: "Food and Drinks", amount: 872400, percentage: 30 },
    { category: "Shopping", amount: 1378200, percentage: 60 },
    { category: "Housing", amount: 928500, percentage: 45 },
    { category: "Transportation", amount: 420700, percentage: 20 },
    { category: "Vehicle", amount: 520000, percentage: 40 },
  ];

  return (
    <div className="">
      <h2 className="mb-6 text-xl font-medium">Where your money go?</h2>
      <div className="space-y-6 md:space-y-8">
        {categories.map((item) => (
          <SpendingCategory
            key={item.category}
            category={item.category}
            amount={item.amount}
            percentage={item.percentage}
          />
        ))}
      </div>
    </div>
  );
};
