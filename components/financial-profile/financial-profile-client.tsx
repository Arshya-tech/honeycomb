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

export function FinancialProfileClient() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Partial<FinancialProfileFormData>>(
    {},
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [recommendations, setRecommendations] = useState<Recommendation | null>(
    null,
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
      <ProgressBar
        currentStep={currentStep + 1}
        totalSteps={financialProfileSteps.length}
      />

      <div className="mx-auto w-full max-w-4xl px-4 py-16">
        {!isComplete ? (
          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary mb-8 text-center text-3xl font-bold"
            >
              {"Let's Personalize Your Financial Journey"}
            </motion.h1>

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
          <FinancialProfileRecommendations
            recommendations={recommendations}
            onFinish={handleFinish}
          />
        )}
      </div>
    </motion.main>
  );
}
