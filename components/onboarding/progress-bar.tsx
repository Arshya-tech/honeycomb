import { motion } from "motion/react";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  // Create an array of steps for rendering individual step indicators
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);

  return (
    <div className="fixed top-0 right-0 left-0 z-50 border-b bg-white/80 px-4 py-4 shadow-sm backdrop-blur-sm">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between">
          <div className="flex flex-1 items-center">
            {steps.map((step) => (
              <div key={step} className="flex items-center">
                <motion.div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
                    step <= currentStep
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  animate={{
                    scale: step === currentStep ? 1.1 : 1,
                    opacity: 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {step}
                </motion.div>

                {step < totalSteps && (
                  <div className="relative mx-2 h-1 w-16 bg-gray-200">
                    <motion.div
                      className="absolute inset-0 bg-green-500"
                      initial={{ scaleX: 0 }}
                      animate={{
                        scaleX: step < currentStep ? 1 : 0,
                      }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-sm font-medium text-gray-500">
            Step {currentStep} of {totalSteps}
          </div>
        </div>
      </div>
    </div>
  );
}
