interface FinancialMetricProps {
  label: string;
  value: string | number;
  description?: string;
}

const FinancialMetric = ({
  label,
  value,
  description,
}: FinancialMetricProps) => (
  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 shadow-sm transition">
    <p className="text-sm font-semibold text-gray-600">{label}</p>
    <p className="mt-1 text-2xl font-bold text-gray-900">{value}</p>
    {description && <p className="mt-1 text-xs text-gray-500">{description}</p>}
  </div>
);

interface FinancialHealthProps {
  metrics: FinancialMetricProps[];
  healthScore: number;
}

export const FinancialHealth = ({
  metrics,
  healthScore,
}: FinancialHealthProps) => {
  return (
    <div className="rounded-xl border border-b-4 border-gray-200 bg-gray-100 p-6">
      <h2 className="font-heading mb-6 text-2xl font-bold text-gray-900">
        Financial Health Snapshot
      </h2>
      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <FinancialMetric key={metric.label} {...metric} />
        ))}
      </div>
      <div>
        <div className="flex items-center justify-between">
          <p className="font-semibold text-gray-900">
            Financial Health Score: {healthScore}/100
          </p>
          <p className="text-sm font-medium text-gray-600">
            {healthScore >= 80
              ? "Excellent"
              : healthScore >= 60
                ? "Good"
                : "Needs Improvement"}
          </p>
        </div>
        <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-gray-200">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              healthScore >= 80
                ? "bg-green-500"
                : healthScore >= 60
                  ? "bg-yellow-500"
                  : "bg-red-500"
            }`}
            style={{ width: `${healthScore}%` }}
          />
        </div>
      </div>
    </div>
  );
};
