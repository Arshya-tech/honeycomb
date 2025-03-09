"use client";

import { ChevronRight, Trophy } from "lucide-react";

import { Button } from "@/components/ui/button";

interface ChallengesHeaderProps {
  totalPoints: number;
}

export function ChallengesHeader({ totalPoints }: ChallengesHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white md:p-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold md:text-4xl">
              Weekly Challenges
            </h1>
            <p className="max-w-2xl text-blue-100">
              Earn points, unlock rewards, and level up your financial skills!
            </p>
          </div>

          <div className="flex flex-col items-end">
            <div className="flex items-center gap-3 rounded-lg bg-white/20 p-3 backdrop-blur-sm">
              <Trophy className="h-6 w-6 text-yellow-300" />
              <div>
                <p className="text-sm text-blue-100">Total Points</p>
                <p className="text-xl font-bold">{totalPoints} points</p>
              </div>
            </div>
            <div className="mt-2 text-xs text-blue-100">
              1,000 points = $10 Cashback
            </div>
            <Button
              className="mt-3 bg-yellow-400 font-semibold text-blue-900 hover:bg-yellow-500"
              onClick={() => (window.location.href = "/rewards")}
            >
              Redeem Rewards
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
