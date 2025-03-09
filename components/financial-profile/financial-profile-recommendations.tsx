"use client";

import { Award, BookOpen, ChevronRight, Target } from "lucide-react";
import { motion } from "motion/react";

import { Recommendation } from "@/lib/validations/financial-profile";
import { Button } from "@/components/ui/button";

interface FinancialProfileRecommendationsProps {
  recommendations: Recommendation | null;
  onFinish: () => void;
}

export function FinancialProfileRecommendations({
  recommendations,
  onFinish,
}: FinancialProfileRecommendationsProps) {
  if (!recommendations) {
    return (
      <div className="text-center">
        <p className="text-muted-foreground">Loading recommendations...</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-6 md:space-y-10"
    >
      {/* Learning Path */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="group relative w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-100 p-4 shadow-md md:p-8"
      >
        <div className="absolute top-0 left-0 h-[25%] w-[25%] rounded-r-full bg-orange-500/20 blur-2xl transition-all duration-1000 group-hover:bg-orange-500/5 lg:group-hover:h-[110%] lg:group-hover:w-[110%]" />

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-full bg-orange-100 text-orange-600 shadow-sm">
            <Target className="size-5" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">
            Your Learning Path
          </h2>
        </div>
        <div className="mt-4 h-2 w-40 bg-orange-500 md:mt-6" />
        <div className="mt-4 md:mt-6">
          <div className="">
            <p className="text-muted-foreground text-xs font-bold">
              YOUR TITLE
            </p>
            <h3 className="text-xl font-bold text-orange-600">
              {recommendations.learningPath.title}
            </h3>
          </div>
          <p className="mt-2.5 text-gray-700">
            Goal: {recommendations.learningPath.description}
          </p>
        </div>
      </motion.div>

      {/* Challenges */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="group relative w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-100 p-4 shadow-md md:p-8"
      >
        <div className="absolute top-0 left-0 h-[25%] w-[25%] rounded-r-full bg-blue-500/20 blur-2xl transition-all duration-1000 group-hover:bg-blue-500/5 lg:group-hover:h-[110%] lg:group-hover:w-[110%]" />

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 shadow-sm">
            <Award className="size-5" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Your Challenges</h2>
        </div>
        <div className="mt-4 h-2 w-40 bg-blue-500 md:mt-6" />
        <div className="mt-4 space-y-4 md:mt-6">
          {recommendations.challenges.map((challenge, index) => (
            <div
              key={index}
              className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm transition-all hover:shadow-md"
            >
              {/* <CheckCircle className="mt-0.5 size-5 text-blue-500" /> */}
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600 shadow-sm">
                {index + 1}
              </div>
              <div>
                <p className="font-medium text-gray-800">{challenge.title}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Tips */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="group relative w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-100 p-4 shadow-md md:p-8"
      >
        <div className="absolute top-0 left-0 h-[25%] w-[25%] rounded-r-full bg-emerald-500/20 blur-2xl transition-all duration-1000 group-hover:bg-emerald-500/5 lg:group-hover:h-[110%] lg:group-hover:w-[110%]" />

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-sm">
            <BookOpen className="size-5" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Financial Tips</h2>
        </div>
        <div className="mt-4 h-2 w-40 bg-emerald-500 md:mt-6" />
        <div className="mt-4 space-y-4 md:mt-6">
          {recommendations.tips.slice(0, 5).map((tip, index) => (
            <div
              key={index}
              className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-sm font-medium text-emerald-600 shadow-sm">
                {index + 1}
              </div>
              <p className="text-gray-700">{tip}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Next Steps */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="group relative w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-100 p-4 shadow-md md:p-8"
      >
        <div className="absolute top-0 left-0 h-[25%] w-[25%] rounded-r-full bg-purple-500/20 blur-2xl transition-all duration-1000 group-hover:bg-purple-500/5 lg:group-hover:h-[110%] lg:group-hover:w-[110%]" />

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-full bg-purple-100 text-purple-600 shadow-sm">
            <Target className="size-5" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Next Steps</h2>
        </div>
        <div className="mt-4 h-2 w-40 bg-purple-500 md:mt-6" />
        <div className="mt-4 space-y-4 md:mt-6">
          {recommendations.nextSteps.slice(0, 3).map((step, index) => (
            <div
              key={index}
              className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 text-sm font-medium text-purple-600 shadow-sm">
                {index + 1}
              </div>
              <p className="text-gray-700">{step}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Continue to Dashboard Button */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex pt-6"
      >
        <Button
          onClick={onFinish}
          size="lg"
          className="gap-2 bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-6 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:from-orange-600 hover:to-orange-700 hover:shadow-xl"
        >
          Continue to Dashboard
          <ChevronRight className="h-4 w-4" />
        </Button>
      </motion.div>
    </motion.div>
  );
}
