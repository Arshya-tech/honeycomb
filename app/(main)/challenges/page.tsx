"use client";

import { useState } from "react";
import { Award, Filter, Search, Trophy, Zap } from "lucide-react";
import { motion } from "motion/react";

import {
  ACTIVE_CHALLENGES,
  ActiveChallenge,
  COMPLETED_CHALLENGES,
  FAQS,
  LEADERBOARD,
  REWARDS,
  UPCOMING_CHALLENGES,
} from "@/lib/data/challenges";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChallengeAchievements } from "@/components/challenges/ChallengeAchievements";
import { ChallengeDetails } from "@/components/challenges/ChallengeDetails";
import { ChallengeGrid } from "@/components/challenges/ChallengeGrid";

const ChallengesPage = () => {
  const [activeTab, setActiveTab] = useState("active");
  const [selectedChallenge, setSelectedChallenge] = useState<number | null>(
    null,
  );
  const [filterDifficulty, setFilterDifficulty] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // Total points earned (would come from user data in a real app)
  const totalPoints = 1500;

  // User's current streak
  const currentStreak = 3;

  // User's position on the leaderboard
  const userPosition = 6;
  const pointsToNextRank = 200;

  // Filter challenges based on difficulty, category, and search query
  const getFilteredChallenges = () => {
    let challenges = [];

    switch (activeTab) {
      case "active":
        challenges = ACTIVE_CHALLENGES;
        break;
      case "completed":
        challenges = COMPLETED_CHALLENGES;
        break;
      case "upcoming":
        challenges = UPCOMING_CHALLENGES;
        break;
      default:
        challenges = ACTIVE_CHALLENGES;
    }

    return challenges.filter((challenge) => {
      const matchesDifficulty =
        !filterDifficulty || challenge.difficulty === filterDifficulty;
      const matchesCategory =
        !filterCategory || challenge.category === filterCategory;
      const matchesSearch =
        !searchQuery ||
        challenge.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        challenge.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesDifficulty && matchesCategory && matchesSearch;
    });
  };

  const filteredChallenges = getFilteredChallenges();

  // Get the selected challenge details
  const selectedChallengeDetails = selectedChallenge
    ? (ACTIVE_CHALLENGES.find(
        (c) => c.id === selectedChallenge,
      ) as ActiveChallenge)
    : null;

  // Get unique categories and difficulties for filters
  const categories = Array.from(
    new Set([
      ...ACTIVE_CHALLENGES.map((c) => c.category),
      ...COMPLETED_CHALLENGES.map((c) => c.category),
      ...UPCOMING_CHALLENGES.map((c) => c.category),
    ]),
  );

  const difficulties = ["Easy", "Medium", "Hard"];

  // Calculate progress stats
  const totalActiveChallenges = ACTIVE_CHALLENGES.length;
  const completedChallengesCount = COMPLETED_CHALLENGES.length;
  const totalChallenges =
    totalActiveChallenges +
    completedChallengesCount +
    UPCOMING_CHALLENGES.length;
  const completionPercentage = Math.round(
    (completedChallengesCount / totalChallenges) * 100,
  );

  return (
    <div className="min-h-screen bg-[#f5f8ff]">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-yellow-600 to-yellow-700 p-6 text-white md:p-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold md:text-4xl">Challenges</h1>
              <p className="max-w-2xl text-blue-100">
                Complete challenges to earn points, unlock rewards, and improve
                your financial skills!
              </p>
            </div>

            <div className="flex flex-col items-end">
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="flex items-center gap-3 rounded-xl bg-white/20 p-4 backdrop-blur-sm"
              >
                <Trophy className="h-8 w-8 text-yellow-300" />
                <div>
                  <p className="text-sm text-blue-100">Total Points</p>
                  <p className="text-2xl font-bold">{totalPoints} points</p>
                </div>
              </motion.div>
              <div className="mt-2 text-xs text-blue-100">
                1,000 points = $10 Cashback
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Challenge Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          <div className="rounded-xl border-2 border-blue-100 bg-white p-5 shadow-sm transition-transform hover:scale-[1.02]">
            <div className="mb-2 flex items-center gap-3">
              <div className="rounded-lg bg-blue-100 p-2">
                <Zap className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-700">Active Challenges</h3>
            </div>
            <p className="text-3xl font-bold text-blue-600">
              {ACTIVE_CHALLENGES.length}
            </p>
            <p className="mt-1 text-sm text-gray-500">Challenges in progress</p>
          </div>

          <div className="rounded-xl border-2 border-blue-100 bg-white p-5 shadow-sm transition-transform hover:scale-[1.02]">
            <div className="mb-2 flex items-center gap-3">
              <div className="rounded-lg bg-green-100 p-2">
                <Trophy className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-700">Completed</h3>
            </div>
            <p className="text-3xl font-bold text-green-600">
              {COMPLETED_CHALLENGES.length}
            </p>
            <p className="mt-1 text-sm text-gray-500">Challenges completed</p>
          </div>

          <div className="rounded-xl border-2 border-blue-100 bg-white p-5 shadow-sm transition-transform hover:scale-[1.02]">
            <div className="mb-2 flex items-center gap-3">
              <div className="rounded-lg bg-orange-100 p-2">
                <Award className="h-5 w-5 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-700">Streak</h3>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-3xl font-bold text-orange-600">
                {currentStreak}
              </p>
              <div className="rounded-full bg-gradient-to-r from-orange-400 to-orange-500 px-3 py-1 text-xs font-bold text-white">
                🔥 Days
              </div>
            </div>
            <p className="mt-1 text-sm text-gray-500">Keep it going!</p>
          </div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 rounded-xl border-2 border-blue-100 bg-white p-5 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-700">Challenge Progress</h3>
            <Badge className="bg-blue-100 text-blue-800">
              {completionPercentage}% Complete
            </Badge>
          </div>
          <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-blue-500"
              style={{ width: `${completionPercentage}%` }}
            ></div>
          </div>
          <div className="mt-2 flex justify-between text-xs text-gray-500">
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </div>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-6 rounded-xl border-2 border-blue-100 bg-white p-4 shadow-sm"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1">
              <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search challenges..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-4 w-4" />
                Filters
              </Button>
              <div className="flex gap-2">
                <Button
                  variant={activeTab === "active" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveTab("active")}
                >
                  Active
                </Button>
                <Button
                  variant={activeTab === "completed" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveTab("completed")}
                >
                  Completed
                </Button>
                <Button
                  variant={activeTab === "upcoming" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveTab("upcoming")}
                >
                  Upcoming
                </Button>
              </div>
            </div>
          </div>

          {/* Expandable Filters */}
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 flex flex-wrap gap-4 border-t pt-4"
            >
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Difficulty
                </label>
                <div className="flex gap-2">
                  <Button
                    variant={filterDifficulty === null ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilterDifficulty(null)}
                  >
                    All
                  </Button>
                  {difficulties.map((difficulty) => (
                    <Button
                      key={difficulty}
                      variant={
                        filterDifficulty === difficulty ? "default" : "outline"
                      }
                      size="sm"
                      onClick={() => setFilterDifficulty(difficulty)}
                    >
                      {difficulty}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Category
                </label>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant={filterCategory === null ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilterCategory(null)}
                  >
                    All
                  </Button>
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={
                        filterCategory === category ? "default" : "outline"
                      }
                      size="sm"
                      onClick={() => setFilterCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Left Column - Challenge Cards and Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-1 gap-6">
              {/* Challenge Cards Grid */}
              <ChallengeGrid
                challenges={filteredChallenges}
                activeTab={activeTab}
                selectedChallenge={selectedChallenge}
                onSelectChallenge={setSelectedChallenge}
              />

              {/* Challenge Details Section */}
              {selectedChallenge && selectedChallengeDetails && (
                <ChallengeDetails
                  challenge={selectedChallengeDetails}
                  onClose={() => setSelectedChallenge(null)}
                />
              )}

              {/* Achievements & Streaks */}
              <ChallengeAchievements currentStreak={currentStreak} />
            </div>
          </motion.div>

          {/* Right Column - Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="space-y-6"
          >
            {/* Leaderboard */}
            <div className="rounded-xl border-2 border-blue-100 bg-white p-5 shadow-sm">
              <h3 className="mb-4 text-lg font-semibold text-gray-800">
                Leaderboard
              </h3>
              <div className="space-y-3">
                {LEADERBOARD.map((user) => (
                  <div
                    key={user.position}
                    className={`flex items-center justify-between rounded-lg p-2 ${
                      user.position === userPosition
                        ? "bg-blue-50 ring-1 ring-blue-200"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-7 w-7 items-center justify-center rounded-full ${
                          user.position <= 3
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {user.position}
                      </div>
                      <span className="font-medium">{user.name}</span>
                    </div>
                    <span className="font-semibold text-blue-600">
                      {user.points} pts
                    </span>
                  </div>
                ))}

                {/* User's position if not in top 5 */}
                {userPosition > 5 && (
                  <>
                    <div className="flex items-center justify-center py-1">
                      <div className="h-1 w-1 rounded-full bg-gray-300"></div>
                      <div className="mx-1 h-1 w-1 rounded-full bg-gray-300"></div>
                      <div className="h-1 w-1 rounded-full bg-gray-300"></div>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-blue-50 p-2 ring-1 ring-blue-200">
                      <div className="flex items-center gap-3">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                          {userPosition}
                        </div>
                        <span className="font-medium">You</span>
                      </div>
                      <span className="font-semibold text-blue-600">
                        {LEADERBOARD[4].points - pointsToNextRank} pts
                      </span>
                    </div>
                  </>
                )}
              </div>
              <div className="mt-4 rounded-lg border border-blue-100 bg-blue-50 p-3 text-sm">
                <p className="font-medium text-blue-800">
                  {pointsToNextRank} points to next rank
                </p>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-blue-200">
                  <div
                    className="h-full rounded-full bg-blue-500"
                    style={{
                      width: `${
                        ((LEADERBOARD[4].points - pointsToNextRank) /
                          LEADERBOARD[4].points) *
                        100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Rewards Preview */}
            <div className="rounded-xl border-2 border-blue-100 bg-white p-5 shadow-sm">
              <h3 className="mb-4 text-lg font-semibold text-gray-800">
                Available Rewards
              </h3>
              <div className="space-y-3">
                {REWARDS.slice(0, 3).map((reward) => (
                  <div
                    key={reward.title}
                    className="flex items-center justify-between rounded-lg border border-yellow-100 bg-yellow-50 p-3 transition-transform hover:scale-[1.02]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-100 text-xl">
                        {reward.image}
                      </div>
                      <span className="font-medium text-gray-800">
                        {reward.title}
                      </span>
                    </div>
                    <Badge
                      className={`${
                        totalPoints >= reward.points
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {reward.points} pts
                    </Badge>
                  </div>
                ))}
              </div>
              <Button
                className="mt-4 w-full bg-yellow-400 font-semibold text-yellow-900 hover:bg-yellow-500"
                onClick={() => (window.location.href = "/rewards")}
              >
                View All Rewards
              </Button>
            </div>

            {/* Quick FAQ */}
            <div className="rounded-xl border-2 border-blue-100 bg-white p-5 shadow-sm">
              <h3 className="mb-4 text-lg font-semibold text-gray-800">
                Quick FAQ
              </h3>
              <div className="space-y-3">
                {FAQS.slice(0, 2).map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-gray-100 bg-gray-50 p-3"
                  >
                    <h4 className="font-medium text-gray-800">
                      {faq.question}
                    </h4>
                    <p className="mt-1 text-sm text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
              <Button
                variant="outline"
                className="mt-4 w-full"
                onClick={() =>
                  document
                    .getElementById("faq-section")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View All FAQs
              </Button>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        {/* <div id="faq-section" className="mt-12">
          <ChallengeFAQ faqs={FAQS} />
        </div> */}
      </div>
    </div>
  );
};

export default ChallengesPage;
