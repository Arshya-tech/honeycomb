"use client";

import { BookOpen, CheckCircle2, GraduationCap } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";

interface LearningStep {
  id: string;
  title: string;
  completed: boolean;
}

interface ActiveLearningPathProps {
  pathName: string;
  progress: {
    completed: number;
    total: number;
  };
  steps: LearningStep[];
}

export const ActiveLearningPath = ({
  pathName,
  progress,
  steps,
}: ActiveLearningPathProps) => {
  const progressPercentage = Math.round(
    (progress.completed / progress.total) * 100,
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
    >
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GraduationCap className="size-4 text-blue-600" />
          <h3 className="text-sm font-semibold text-gray-700">Learning Path</h3>
        </div>
        <div className="flex items-center gap-1 rounded-full bg-blue-500/10 px-2 py-0.5">
          <BookOpen className="size-3 text-blue-600" />
          <span className="text-xs font-medium text-blue-600">
            {progress.completed}/{progress.total}
          </span>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm font-medium text-gray-700">{pathName}</p>
        <div className="relative mt-2">
          <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-full bg-blue-500"
            />
          </div>
          <span className="absolute -top-6 -right-1 text-xs font-medium text-blue-600">
            {progressPercentage}%
          </span>
        </div>
      </div>

      <div className="space-y-2">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
            className={`flex items-center gap-2 rounded-lg p-2 ${
              step.completed ? "bg-blue-50" : "bg-gray-50"
            }`}
          >
            <CheckCircle2
              className={`size-4 ${
                step.completed ? "text-blue-500" : "text-gray-300"
              }`}
            />
            <p
              className={`text-xs ${
                step.completed
                  ? "font-medium text-gray-700"
                  : "font-normal text-gray-500"
              }`}
            >
              {step.title}
            </p>
          </motion.div>
        ))}
      </div>

      <Button
        variant="outline"
        className="mt-4 w-full gap-2 bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700"
      >
        <BookOpen className="size-4" />
        <span className="text-sm">Continue Learning</span>
      </Button>
    </motion.div>
  );
};
