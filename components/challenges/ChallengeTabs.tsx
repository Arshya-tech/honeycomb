"use client";

interface ChallengeTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  filterDifficulty: string | null;
  setFilterDifficulty: (difficulty: string | null) => void;
  filterCategory: string | null;
  setFilterCategory: (category: string | null) => void;
  difficulties: string[];
  categories: string[];
}

export function ChallengeTabs({
  activeTab,
  setActiveTab,
  filterDifficulty,
  setFilterDifficulty,
  filterCategory,
  setFilterCategory,
  difficulties,
  categories,
}: ChallengeTabsProps) {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-2 border-b">
        <button
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === "active"
              ? "border-b-2 border-blue-500 text-blue-600"
              : "text-gray-600 hover:text-blue-500"
          }`}
          onClick={() => setActiveTab("active")}
        >
          Active Challenges
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === "completed"
              ? "border-b-2 border-blue-500 text-blue-600"
              : "text-gray-600 hover:text-blue-500"
          }`}
          onClick={() => setActiveTab("completed")}
        >
          Completed Challenges
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === "upcoming"
              ? "border-b-2 border-blue-500 text-blue-600"
              : "text-gray-600 hover:text-blue-500"
          }`}
          onClick={() => setActiveTab("upcoming")}
        >
          Upcoming Challenges
        </button>
      </div>

      {/* Filters */}
      <div className="mt-4 flex flex-wrap gap-3">
        <div>
          <label className="mr-2 text-sm text-gray-500">Difficulty:</label>
          <select
            className="rounded-md border px-2 py-1 text-sm"
            value={filterDifficulty || ""}
            onChange={(e) => setFilterDifficulty(e.target.value || null)}
          >
            <option value="">All</option>
            {difficulties.map((difficulty) => (
              <option key={difficulty} value={difficulty}>
                {difficulty}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mr-2 text-sm text-gray-500">Category:</label>
          <select
            className="rounded-md border px-2 py-1 text-sm"
            value={filterCategory || ""}
            onChange={(e) => setFilterCategory(e.target.value || null)}
          >
            <option value="">All</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
