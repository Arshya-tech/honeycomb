"use client";

import { Award, CheckCircle, Clock } from "lucide-react";
import { motion } from "motion/react";

import {
  ActiveChallenge,
  CompletedChallenge,
  UpcomingChallenge,
} from "@/lib/data/challenges";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ChallengeCardProps {
  challenge: ActiveChallenge | CompletedChallenge | UpcomingChallenge;
  isSelected: boolean;
  activeTab: string;
  onSelect: (id: number) => void;
}

export function ChallengeCard({
  challenge,
  isSelected,
  activeTab,
  onSelect,
}: ChallengeCardProps) {
  const isActive = "progress" in challenge;
  const isCompleted = "completedDate" in challenge;
  const isUpcoming = "availableDate" in challenge;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`cursor-pointer overflow-hidden rounded-lg border bg-white shadow-sm transition-shadow hover:shadow-md ${
        isSelected ? "ring-2 ring-blue-500" : ""
      }`}
      onClick={() => {
        if (activeTab === "active") {
          onSelect(challenge.id);
        }
      }}
    >
      <div className="p-5">
        <div className="mb-3 flex items-start justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{challenge.icon}</span>
            <h3 className="font-semibold text-gray-800">{challenge.title}</h3>
          </div>

          {isActive && (
            <Badge
              className={`px-2 py-1 text-xs font-medium ${
                challenge.status === "New"
                  ? "bg-green-100 text-green-800"
                  : challenge.status === "Almost Done!"
                    ? "bg-orange-100 text-orange-800"
                    : "bg-blue-100 text-blue-800"
              }`}
            >
              {challenge.status}
            </Badge>
          )}

          {isCompleted && (
            <Badge className="bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
              Completed
            </Badge>
          )}

          {isUpcoming && (
            <Badge className="bg-purple-100 px-2 py-1 text-xs font-medium text-purple-800">
              Coming Soon
            </Badge>
          )}
        </div>

        <p className="mb-4 text-sm text-gray-600">{challenge.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 font-semibold text-yellow-600">
            <Award className="h-4 w-4" />
            <span>+{challenge.points} points</span>
          </div>

          {isActive && (
            <div className="text-xs text-gray-500">
              {challenge.progress}/{challenge.totalSteps} steps completed
            </div>
          )}
        </div>

        {isActive && (
          <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-blue-500"
              style={{
                width: `${(challenge.progress / challenge.totalSteps) * 100}%`,
              }}
            ></div>
          </div>
        )}

        {isActive && (
          <div className="mt-3 flex items-center gap-1 text-xs text-gray-500">
            <Clock className="h-3 w-3" />
            <span>{challenge.daysLeft} days left</span>
          </div>
        )}

        {isCompleted && (
          <div className="mt-3 flex items-center gap-1 text-xs text-gray-500">
            <CheckCircle className="h-3 w-3 text-green-500" />
            <span>Completed on {challenge.completedDate}</span>
          </div>
        )}

        {isUpcoming && (
          <div className="mt-3 flex items-center gap-1 text-xs text-gray-500">
            <Clock className="h-3 w-3" />
            <span>Available on {challenge.availableDate}</span>
          </div>
        )}

        {activeTab === "active" && (
          <div className="mt-4">
            <Button
              variant={
                isActive && challenge.progress > 0 ? "secondary" : "default"
              }
              size="sm"
              className="w-full"
            >
              {isActive && challenge.progress > 0
                ? "Continue"
                : "Start Challenge"}
            </Button>
          </div>
        )}

        {activeTab === "upcoming" && (
          <div className="mt-4">
            <Button variant="outline" size="sm" className="w-full" disabled>
              Coming Soon
            </Button>
          </div>
        )}
      </div>
    </motion.div>
  );
}
