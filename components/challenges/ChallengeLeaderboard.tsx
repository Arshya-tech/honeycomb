"use client";

import { Trophy, Users } from "lucide-react";

import { LeaderboardUser } from "@/lib/data/challenges";

interface ChallengeLeaderboardProps {
  leaderboard: LeaderboardUser[];
  userPosition: number;
  pointsToNextRank: number;
}

export function ChallengeLeaderboard({
  leaderboard,
  userPosition,
  pointsToNextRank,
}: ChallengeLeaderboardProps) {
  return (
    <div className="mt-12">
      <h2 className="mb-6 text-xl font-semibold text-gray-800">
        Top Challengers This Week
      </h2>

      <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 text-white">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Leaderboard</h3>
            <div className="flex items-center gap-1">
              <Trophy className="h-4 w-4 text-yellow-300" />
              <span>Weekly Rankings</span>
            </div>
          </div>
        </div>

        <div className="divide-y">
          {leaderboard.map((user) => (
            <div
              key={user.position}
              className="flex items-center justify-between p-4 hover:bg-gray-50"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-6 w-6 items-center justify-center rounded-full ${
                    user.position === 1
                      ? "bg-yellow-100 text-yellow-700"
                      : user.position === 2
                        ? "bg-gray-200 text-gray-700"
                        : user.position === 3
                          ? "bg-amber-100 text-amber-700"
                          : "bg-blue-100 text-blue-700"
                  } text-sm font-medium`}
                >
                  {user.position}
                </div>
                <span className="font-medium text-gray-800">{user.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="h-4 w-4 text-yellow-500" />
                <span className="font-medium">{user.points} points</span>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t bg-blue-50 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-700">
                {userPosition}
              </div>
              <span className="font-medium text-gray-800">You</span>
            </div>
            <div className="text-sm text-blue-700">
              {pointsToNextRank} points to reach #{userPosition - 1}!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
