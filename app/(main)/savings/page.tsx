import { ArrowUpRight, PiggyBank } from "lucide-react";

const SavingsPage = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Savings</h1>
        <p className="text-muted-foreground">
          Track your savings goals and progress
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Savings Goal Card */}
        <div className="border-border bg-card rounded-lg border p-6">
          <div className="mb-4 flex items-center justify-between">
            <div className="bg-primary/20 flex h-12 w-12 items-center justify-center rounded-full">
              <PiggyBank className="text-primary h-6 w-6" />
            </div>
            <span className="flex items-center text-sm text-green-500">
              <ArrowUpRight className="mr-1 h-4 w-4" />
              +5.2%
            </span>
          </div>
          <h3 className="text-lg font-medium">Emergency Fund</h3>
          <div className="mt-2 space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium">$3,500 / $10,000</span>
            </div>
            <div className="bg-muted h-2 w-full overflow-hidden rounded-full">
              <div
                className="bg-primary h-full rounded-full"
                style={{ width: "35%" }}
              />
            </div>
          </div>
        </div>

        {/* Savings Goal Card */}
        <div className="border-border bg-card rounded-lg border p-6">
          <div className="mb-4 flex items-center justify-between">
            <div className="bg-primary/20 flex h-12 w-12 items-center justify-center rounded-full">
              <PiggyBank className="text-primary h-6 w-6" />
            </div>
            <span className="flex items-center text-sm text-green-500">
              <ArrowUpRight className="mr-1 h-4 w-4" />
              +12.8%
            </span>
          </div>
          <h3 className="text-lg font-medium">Vacation Fund</h3>
          <div className="mt-2 space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium">$1,200 / $3,000</span>
            </div>
            <div className="bg-muted h-2 w-full overflow-hidden rounded-full">
              <div
                className="bg-primary h-full rounded-full"
                style={{ width: "40%" }}
              />
            </div>
          </div>
        </div>

        {/* Savings Goal Card */}
        <div className="border-border bg-card rounded-lg border p-6">
          <div className="mb-4 flex items-center justify-between">
            <div className="bg-primary/20 flex h-12 w-12 items-center justify-center rounded-full">
              <PiggyBank className="text-primary h-6 w-6" />
            </div>
            <span className="flex items-center text-sm text-green-500">
              <ArrowUpRight className="mr-1 h-4 w-4" />
              +2.5%
            </span>
          </div>
          <h3 className="text-lg font-medium">New Car</h3>
          <div className="mt-2 space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium">$5,000 / $25,000</span>
            </div>
            <div className="bg-muted h-2 w-full overflow-hidden rounded-full">
              <div
                className="bg-primary h-full rounded-full"
                style={{ width: "20%" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Savings Tips */}
      <div className="border-border bg-card rounded-lg border p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Save more money</h2>
          <button className="bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm font-medium">
            VIEW TIPS
          </button>
        </div>
        <p className="text-muted-foreground mt-4">
          Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

export default SavingsPage;
