"use client";

import { Award } from "lucide-react";
import { motion } from "motion/react";

import { Reward } from "@/lib/data/challenges";
import { Button } from "@/components/ui/button";

interface ChallengeRewardsProps {
  rewards: Reward[];
}

export function ChallengeRewards({ rewards }: ChallengeRewardsProps) {
  return (
    <div className="mt-12">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">
          What Your Points Can Unlock
        </h2>
        <Button
          variant="outline"
          onClick={() => (window.location.href = "/rewards")}
        >
          View All Rewards
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {rewards.map((reward, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="overflow-hidden rounded-lg border bg-white shadow-sm"
          >
            <div className="flex justify-center bg-gradient-to-r from-blue-500 to-blue-600 p-4">
              <span className="text-4xl">{reward.image}</span>
            </div>
            <div className="p-4">
              <h3 className="mb-2 font-semibold text-gray-800">
                {reward.title}
              </h3>
              <div className="flex items-center gap-1 text-yellow-600">
                <Award className="h-4 w-4" />
                <span className="font-medium">{reward.points} points</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
