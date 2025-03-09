"use client";

import { useState } from "react";

import {
  ACTIVE_CHALLENGES,
  ActiveChallenge,
  COMPLETED_CHALLENGES,
  FAQS,
  LEADERBOARD,
  REWARDS,
  UPCOMING_CHALLENGES,
} from "@/lib/data/challenges";
import { ChallengeAchievements } from "@/components/challenges/ChallengeAchievements";
import { ChallengeDetails } from "@/components/challenges/ChallengeDetails";
import { ChallengeFAQ } from "@/components/challenges/ChallengeFAQ";
import { ChallengeGrid } from "@/components/challenges/ChallengeGrid";
import { ChallengeLeaderboard } from "@/components/challenges/ChallengeLeaderboard";
import { ChallengeRewards } from "@/components/challenges/ChallengeRewards";
import { ChallengesHeader } from "@/components/challenges/ChallengesHeader";
import { ChallengeTabs } from "@/components/challenges/ChallengeTabs";

const ChallengesPage = () => {
  const [activeTab, setActiveTab] = useState("active");
  const [selectedChallenge, setSelectedChallenge] = useState<number | null>(
    null,
  );
  const [filterDifficulty, setFilterDifficulty] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<string | null>(null);

  // Total points earned (would come from user data in a real app)
  const totalPoints = 1500;

  // User's current streak
  const currentStreak = 3;

  // User's position on the leaderboard
  const userPosition = 6;
  const pointsToNextRank = 200;

  // Filter challenges based on difficulty and category
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
      return matchesDifficulty && matchesCategory;
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

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <ChallengesHeader totalPoints={totalPoints} />

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Challenge Categories Tabs */}
        <ChallengeTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          filterDifficulty={filterDifficulty}
          setFilterDifficulty={setFilterDifficulty}
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
          difficulties={difficulties}
          categories={categories}
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
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
        </div>

        {/* Achievements & Streaks */}
        <ChallengeAchievements currentStreak={currentStreak} />

        {/* Rewards Preview Section */}
        <ChallengeRewards rewards={REWARDS} />

        {/* Leaderboard */}
        <ChallengeLeaderboard
          leaderboard={LEADERBOARD}
          userPosition={userPosition}
          pointsToNextRank={pointsToNextRank}
        />

        {/* FAQ Section */}
        <ChallengeFAQ faqs={FAQS} />
      </div>
    </div>
  );
};

export default ChallengesPage;
