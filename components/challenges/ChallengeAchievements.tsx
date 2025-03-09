"use client";

import { Award, Flame } from "lucide-react";

import { Button } from "@/components/ui/button";

interface ChallengeAchievementsProps {
  currentStreak: number;
}

export function ChallengeAchievements({
  currentStreak,
}: ChallengeAchievementsProps) {
  return (
    <div className="mt-12 rounded-lg border border-orange-100 bg-gradient-to-r from-orange-50 to-amber-50 p-6">
      <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <h2 className="text-xl font-semibold text-orange-800">
          Your Achievements
        </h2>
        <Button
          variant="outline"
          className="border-orange-200 text-orange-700 hover:bg-orange-100"
          onClick={() => (window.location.href = "/achievements")}
        >
          View All Achievements
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-orange-100 bg-white p-4 shadow-sm">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
              <Flame className="h-6 w-6 text-orange-500" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Current Streak</h3>
              <p className="font-medium text-orange-600">
                You&apos;ve completed {currentStreak} weekly challenges in a
                row! 🔥
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            Keep your streak going by completing at least one challenge each
            week.
          </p>
        </div>

        <div className="rounded-lg border border-orange-100 bg-white p-4 shadow-sm">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
              <Award className="h-6 w-6 text-orange-500" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Recent Badges</h3>
              <p className="font-medium text-orange-600">
                You&apos;ve earned 3 badges this month!
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex size-12 items-center justify-center rounded-full bg-blue-100 text-xl text-blue-600">
              📊
            </div>
            <div className="flex size-12 items-center justify-center rounded-full bg-green-100 text-xl text-green-600">
              💰
            </div>
            <div className="flex size-12 items-center justify-center rounded-full bg-purple-100 text-xl text-purple-600">
              📚
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
