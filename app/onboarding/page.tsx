"use client";

import { useState } from "react";
import { Bot, Sparkles, Target, Trophy } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { NavigationControls } from "@/components/onboarding/navigation-controls";
import { OnboardingSection } from "@/components/onboarding/onboarding-section";
import { ProgressBar } from "@/components/onboarding/progress-bar";

const ONBOARDING_STEPS = [
  {
    title: "Personalized Learning Journey",
    description:
      "Our AI analyzes your goals and habits to create a tailored learning path just for you.",
    content: (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-xl border-2 border-b-4 border-green-200 bg-gradient-to-br from-green-50 to-green-100/50 p-6 shadow-md">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-green-100 p-2 shadow-sm">
              <Sparkles className="h-5 w-5 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-800">Your Learning Path</h3>
          </div>

          <div className="space-y-4">
            {[1, 2, 3].map((_, i) => (
              <motion.div
                key={i}
                className="relative h-12 rounded-lg border border-green-200 bg-white p-3"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-xs font-medium text-green-800">
                    {i + 1}
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-100">
                    <motion.div
                      className="h-full rounded-full bg-green-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${(3 - i) * 33}%` }}
                      transition={{ delay: i * 0.2 + 0.3, duration: 0.8 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-xl border-2 border-b-4 border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100/50 p-6 shadow-md">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-blue-100 p-2 shadow-sm">
              <Sparkles className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-800">Financial Goals</h3>
          </div>

          <div className="space-y-4">
            {["Save for vacation", "Emergency fund", "Reduce debt"].map(
              (goal, i) => (
                <motion.div
                  key={i}
                  className="flex items-center justify-between rounded-lg border border-blue-200 bg-white p-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.15 + 0.2 }}
                >
                  <span className="font-medium text-gray-700">{goal}</span>
                  <div className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                    In progress
                  </div>
                </motion.div>
              ),
            )}
          </div>

          <Button className="mt-4 bg-blue-500 hover:bg-blue-600">
            View All Goals
          </Button>
        </div>
      </div>
    ),
  },
  {
    title: "Fun Daily Challenges",
    description:
      "Complete exciting challenges to build healthy financial habits and earn rewards.",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            {
              title: "Budget Master",
              desc: "Track expenses for 7 days",
              icon: "💰",
              color: "rose",
            },
            {
              title: "Savings Hero",
              desc: "Save $100 this month",
              icon: "🏦",
              color: "amber",
            },
            {
              title: "Knowledge Seeker",
              desc: "Complete 3 lessons",
              icon: "📚",
              color: "blue",
            },
          ].map((challenge, i) => (
            <motion.div
              key={i}
              className={`group relative rounded-xl border-2 border-b-4 border-${challenge.color}-200 bg-gradient-to-br from-${challenge.color}-50 to-${challenge.color}-100/50 p-5 shadow-md transition-all duration-300 hover:-translate-y-1`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="mb-3 flex items-center gap-3">
                <div
                  className={`rounded-lg bg-${challenge.color}-100 p-2 text-xl`}
                >
                  {challenge.icon}
                </div>
                <h3 className="font-semibold text-gray-800">
                  {challenge.title}
                </h3>
              </div>
              <p className="mb-4 text-sm text-gray-600">{challenge.desc}</p>
              <div className="mt-3">
                <div className="mb-2 flex items-center justify-between text-xs">
                  <span className="font-medium text-gray-600">Progress</span>
                  <span className="font-medium text-gray-800">30%</span>
                </div>
                <div
                  className={`h-2 w-full overflow-hidden rounded-full bg-${challenge.color}-100`}
                >
                  <motion.div
                    className={`h-full rounded-full bg-${challenge.color}-500`}
                    initial={{ width: "0%" }}
                    animate={{ width: "30%" }}
                    transition={{ delay: i * 0.2 + 0.3, duration: 0.8 }}
                  />
                </div>
              </div>
              <Button
                className={`mt-4 w-full bg-${challenge.color}-500 hover:bg-${challenge.color}-600 text-white`}
                size="sm"
              >
                Start Challenge
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 rounded-xl border-2 border-b-4 border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100/50 p-4 shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-purple-100 p-2 shadow-sm">
                <Target className="h-5 w-5 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-800">
                Challenge Leaderboard
              </h3>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="border-purple-200 text-purple-600"
            >
              View All
            </Button>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "AI-Powered Financial Coach",
    description:
      "Get personalized advice and answers to your financial questions anytime.",
    content: (
      <div className="rounded-xl border-2 border-b-4 border-indigo-200 bg-gradient-to-br from-indigo-50 to-indigo-100/50 p-6 shadow-md">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-lg bg-indigo-100 p-2 shadow-sm">
            <Bot className="h-5 w-5 text-indigo-600" />
          </div>
          <h3 className="font-semibold text-gray-800">
            Ask Your Financial Coach
          </h3>
        </div>

        <div className="space-y-4">
          {[
            { text: "How can I start saving for retirement?", from: "user" },
            {
              text: "Starting early is key! I recommend setting up automatic contributions to a 401(k) or IRA. Even small amounts add up over time due to compound interest.",
              from: "ai",
            },
            { text: "What's a good emergency fund size?", from: "user" },
          ].map((message, i) => (
            <motion.div
              key={i}
              className={`flex ${message.from === "user" ? "justify-end" : "justify-start"}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <div
                className={`max-w-[80%] rounded-2xl p-4 ${
                  message.from === "user"
                    ? "rounded-tr-none bg-indigo-500 text-white"
                    : "rounded-tl-none border border-indigo-200 bg-white text-gray-800"
                }`}
              >
                <p className="text-sm">{message.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 flex gap-2">
          <div className="flex-1 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-400">
            Ask me anything about your finances...
          </div>
          <Button className="rounded-full bg-indigo-500 px-4 hover:bg-indigo-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 2L11 13"></path>
              <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
            </svg>
          </Button>
        </div>
      </div>
    ),
  },
  {
    title: "Earn Amazing Rewards",
    description:
      "Turn your financial achievements into real rewards, from cashback to exclusive discounts.",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            {
              title: "Cash Back",
              desc: "Get 5% back on your savings",
              icon: "💵",
              color: "emerald",
            },
            {
              title: "Gift Cards",
              desc: "Redeem points for gift cards",
              icon: "🎁",
              color: "amber",
            },
            {
              title: "Premium Features",
              desc: "Unlock advanced tools",
              icon: "⭐",
              color: "blue",
            },
          ].map((reward, i) => (
            <motion.div
              key={i}
              className={`rounded-xl border-2 border-b-4 border-${reward.color}-200 bg-white p-5 shadow-md transition-all duration-300 hover:shadow-lg`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="mb-3 flex items-center justify-center text-3xl">
                {reward.icon}
              </div>
              <h3 className="mb-2 text-center font-semibold text-gray-800">
                {reward.title}
              </h3>
              <p className="text-center text-sm text-gray-600">{reward.desc}</p>
              <div className="mt-4 flex justify-center">
                <Button
                  className={`bg-${reward.color}-500 hover:bg-${reward.color}-600 text-white`}
                  size="sm"
                >
                  Claim Reward
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="rounded-xl border-2 border-b-4 border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100/50 p-6 shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-orange-100 p-2 shadow-sm">
                <Trophy className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">
                  Your Reward Points
                </h3>
                <p className="text-sm text-gray-600">
                  Complete challenges to earn more
                </p>
              </div>
            </div>
            <div className="rounded-xl bg-white px-4 py-2 text-xl font-bold text-orange-500 shadow-sm">
              1,250 pts
            </div>
          </div>

          <motion.div
            className="mt-4 h-3 w-full overflow-hidden rounded-full bg-orange-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-orange-400 to-orange-500"
              initial={{ width: "0%" }}
              animate={{ width: "65%" }}
              transition={{ delay: 0.7, duration: 1 }}
            />
          </motion.div>
          <div className="mt-2 flex justify-between text-xs font-medium">
            <span>0 pts</span>
            <span>Next reward: 2,000 pts</span>
          </div>
        </div>
      </div>
    ),
  },
];

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < ONBOARDING_STEPS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-background relative min-h-svh bg-gray-50"
    >
      <ProgressBar
        currentStep={currentStep + 1}
        totalSteps={ONBOARDING_STEPS.length}
      />

      <div className="mx-auto w-full max-w-5xl px-4 py-24">
        <div className="relative min-h-[500px]">
          {ONBOARDING_STEPS.map((step, index) => (
            <OnboardingSection
              key={index}
              title={step.title}
              description={step.description}
              isVisible={currentStep === index}
            >
              {step.content}
            </OnboardingSection>
          ))}
        </div>
      </div>

      <NavigationControls
        currentStep={currentStep}
        totalSteps={ONBOARDING_STEPS.length}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </motion.main>
  );
}
