"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { toast } from "sonner";

import { financialProfileSteps } from "@/config/financial-profile";
import {
  FinancialProfileFormData,
  Recommendation,
} from "@/lib/validations/financial-profile";
import { FinancialProfileForm } from "@/components/financial-profile/financial-profile-form";
import { FinancialProfileRecommendations } from "@/components/financial-profile/financial-profile-recommendations";
import { ProgressBar } from "@/components/onboarding/progress-bar";

interface FinancialProfileClientProps {
  initialRecommendations?: Recommendation | null;
}

export function FinancialProfileClient({
  initialRecommendations,
}: FinancialProfileClientProps) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Partial<FinancialProfileFormData>>(
    {},
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(!!initialRecommendations);
  const [recommendations, setRecommendations] = useState<Recommendation | null>(
    initialRecommendations || null,
  );

  const handleNext = (stepData: Partial<FinancialProfileFormData>) => {
    // Update form data with the current step's data
    setFormData((prev) => ({ ...prev, ...stepData }));

    // If this is the last step, submit the form
    if (currentStep === financialProfileSteps.length - 1) {
      handleSubmit({ ...formData, ...stepData });
    } else {
      // Otherwise, move to the next step
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async (data: Partial<FinancialProfileFormData>) => {
    setIsSubmitting(true);

    try {
      // Submit the financial profile data
      const response = await fetch("/api/financial-profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to save financial profile");
      }

      // Get recommendations based on the profile
      const recommendationsResponse = await fetch(
        "/api/financial-profile/recommendations",
      );

      if (!recommendationsResponse.ok) {
        throw new Error("Failed to get recommendations");
      }

      const recommendationsData = (await recommendationsResponse.json()) as {
        recommendations: Recommendation;
      };
      setRecommendations(recommendationsData.recommendations);

      // Mark the profile as complete
      setIsComplete(true);

      toast.success("Financial profile completed successfully!");
    } catch (error) {
      console.error("Error submitting financial profile:", error);
      toast.error(
        error instanceof Error ? error.message : "Something went wrong",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFinish = () => {
    router.push("/dashboard");
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-svh"
    >
      {/* <div className="absolute top-4 right-4">
        <MotionLink
          href={"/dashboard"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-muted-foreground hover:text-primary flex items-center gap-2 text-sm transition-colors"
        >
          Skip to Dashboard
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
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </MotionLink>
      </div> */}

      <ProgressBar
        currentStep={currentStep + 1}
        totalSteps={financialProfileSteps.length}
      />

      <div className="mx-auto w-full px-4 py-16 2xl:py-24">
        {!isComplete ? (
          <div className="relative mx-auto max-w-4xl space-y-8">
            <div className="space-y-4 text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-secondary text-4xl font-bold tracking-tight"
              >
                Let&apos;s Personalize Your Financial Journey
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-muted-foreground/80 mx-auto max-w-2xl text-base leading-relaxed"
              >
                Answer a few questions to help us understand your financial
                goals and create a personalized plan for your success.
              </motion.p>
            </div>

            <FinancialProfileForm
              currentStep={currentStep}
              steps={financialProfileSteps}
              formData={formData}
              onNext={handleNext}
              onPrev={handlePrev}
              isSubmitting={isSubmitting}
            />
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-5xl space-y-8"
          >
            <div className="space-y-2">
              <motion.h1
                initial={{ filter: "blur(6px)" }}
                animate={{ filter: "blur(0px)" }}
                transition={{ duration: 1 }}
                className="text-background font-heading text-4xl font-bold xl:text-5xl"
              >
                Your Financial Profile
              </motion.h1>
              <motion.p
                initial={{ filter: "blur(6px)" }}
                animate={{ filter: "blur(0px)" }}
                transition={{ duration: 1 }}
                className="text-muted text-balance"
              >
                Based on your responses, we&apos;ve created personalized
                recommendations to help you achieve your financial goals.
              </motion.p>
            </div>
            <FinancialProfileRecommendations
              recommendations={recommendations}
              onFinish={handleFinish}
            />
          </motion.div>
        )}
      </div>
    </motion.main>
  );
}
