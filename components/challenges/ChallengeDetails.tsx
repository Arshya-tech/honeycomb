"use client";

import { Award, Clock } from "lucide-react";
import { motion } from "motion/react";

import { ActiveChallenge } from "@/lib/data/challenges";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ChallengeDetailsProps {
  challenge: ActiveChallenge;
  onClose: () => void;
}

export function ChallengeDetails({
  challenge,
  onClose,
}: ChallengeDetailsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-lg border bg-white p-6 shadow-sm lg:col-span-2"
    >
      <div className="mb-6 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{challenge.icon}</span>
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              {challenge.title}
            </h2>
            <p className="text-gray-600">{challenge.description}</p>
          </div>
        </div>
        <Badge
          className={`px-2 py-1 text-sm font-medium ${
            challenge.difficulty === "Easy"
              ? "bg-green-100 text-green-800"
              : challenge.difficulty === "Medium"
                ? "bg-blue-100 text-blue-800"
                : "bg-orange-100 text-orange-800"
          }`}
        >
          {challenge.difficulty}
        </Badge>
      </div>

      <div className="mb-6 flex items-center gap-2">
        <Clock className="h-5 w-5 text-orange-500" />
        <span className="font-medium text-orange-600">
          {challenge.daysLeft} days left to complete
        </span>
      </div>

      <div className="mb-6">
        <h3 className="mb-3 text-lg font-semibold">Step-by-Step Guide</h3>
        <div className="space-y-3">
          {challenge.steps.map((step, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600">
                {index + 1}
              </div>
              <p className="text-gray-700">{step}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="mb-3 text-lg font-semibold">Reward Preview</h3>
        <div className="rounded-lg border border-yellow-200 bg-gradient-to-r from-yellow-50 to-amber-50 p-4">
          <div className="flex items-center gap-2 text-amber-700">
            <Award className="h-5 w-5 text-yellow-500" />
            <span className="font-medium">{challenge.reward}</span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="mb-3 text-lg font-semibold">AI Tips</h3>
        <div className="space-y-3">
          {challenge.tips.map((tip, index) => (
            <div
              key={index}
              className="flex items-start gap-3 rounded-lg border border-blue-100 bg-blue-50 p-3"
            >
              <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600">
                💡
              </div>
              <p className="text-gray-700">{tip}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <Button className="flex-1 bg-blue-500 hover:bg-blue-600">
          {challenge.progress > 0 ? "Continue Challenge" : "Start Challenge"}
        </Button>
        <Button variant="outline" className="flex-1" onClick={onClose}>
          View All Challenges
        </Button>
      </div>
    </motion.div>
  );
}
