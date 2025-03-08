"use client";

import { useState } from "react";
import { motion } from "motion/react";

import { NavigationControls } from "@/components/onboarding/navigation-controls";
import { OnboardingSection } from "@/components/onboarding/onboarding-section";
import { ProgressBar } from "@/components/onboarding/progress-bar";

const ONBOARDING_STEPS = [
  {
    title: "Personalized Learning Journey",
    description:
      "Our AI analyzes your goals and habits to create a tailored learning path just for you.",
    content: (
      <div className="bg-muted flex h-48 items-center justify-center rounded">
        <div className="w-full max-w-sm p-4">
          <div className="space-y-4">
            {[1, 2, 3].map((_, i) => (
              <motion.div
                key={i}
                className="bg-primary/20 h-4 rounded"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: i * 0.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Fun Daily Challenges",
    description:
      "Complete exciting challenges to build healthy financial habits and earn rewards.",
    content: (
      <div className="grid grid-cols-2 gap-4">
        {[1, 2].map((_, i) => (
          <motion.div
            key={i}
            className="bg-muted rounded-lg p-6"
            initial={{ opacity: 0, x: i ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <div className="text-primary flex h-24 items-center justify-center">
              Challenge {i + 1}
            </div>
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    title: "AI-Powered Financial Coach",
    description:
      "Get personalized advice and answers to your financial questions anytime.",
    content: (
      <div className="space-y-4">
        {[1, 2, 3].map((_, i) => (
          <motion.div
            key={i}
            className={`flex ${i % 2 === 0 ? "justify-start" : "justify-end"}`}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <div
              className={`bg-muted max-w-[80%] rounded-lg p-4 ${
                i % 2 === 0 ? "rounded-tl-none" : "rounded-tr-none"
              }`}
            >
              <div className="h-8" />
            </div>
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    title: "Earn Amazing Rewards",
    description:
      "Turn your financial achievements into real rewards, from cashback to exclusive discounts.",
    content: (
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3].map((_, i) => (
          <motion.div
            key={i}
            className="bg-muted rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <div className="text-primary flex h-24 items-center justify-center">
              Reward {i + 1}
            </div>
          </motion.div>
        ))}
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
      className="relative min-h-svh"
    >
      <ProgressBar
        currentStep={currentStep + 1}
        totalSteps={ONBOARDING_STEPS.length}
      />

      <div className="mx-auto w-full max-w-4xl px-4 py-16">
        <div className="relative">
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
