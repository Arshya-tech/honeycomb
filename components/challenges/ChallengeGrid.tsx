"use client";

import { motion } from "motion/react";

import {
  ActiveChallenge,
  CompletedChallenge,
  UpcomingChallenge,
} from "@/lib/data/challenges";
import { ChallengeCard } from "@/components/challenges/ChallengeCard";

interface ChallengeGridProps {
  challenges: (ActiveChallenge | CompletedChallenge | UpcomingChallenge)[];
  activeTab: string;
  selectedChallenge: number | null;
  onSelectChallenge: (id: number) => void;
}

export function ChallengeGrid({
  challenges,
  activeTab,
  selectedChallenge,
  onSelectChallenge,
}: ChallengeGridProps) {
  return (
    <div
      className={`${selectedChallenge ? "lg:col-span-1" : "lg:col-span-3"} space-y-6`}
    >
      <h2 className="text-xl font-semibold text-gray-800">
        {activeTab === "active" && "Active Weekly Challenges"}
        {activeTab === "completed" && "Completed Challenges"}
        {activeTab === "upcoming" && "Upcoming Challenges"}
      </h2>

      <div className="lg:grid-cols-auto grid grid-cols-1 gap-4 md:grid-cols-2">
        {challenges.length > 0 ? (
          challenges.map((challenge) => (
            <ChallengeCard
              key={challenge.id}
              challenge={challenge}
              isSelected={selectedChallenge === challenge.id}
              activeTab={activeTab}
              onSelect={onSelectChallenge}
            />
          ))
        ) : (
          <div className="col-span-full py-10 text-center text-gray-500">
            No challenges found matching your filters.
          </div>
        )}
      </div>
    </div>
  );
}
