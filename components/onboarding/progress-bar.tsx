import { motion } from "motion/react";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  // Calculate progress percentage
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <motion.div
      className="fixed top-0 right-0 z-50 h-full w-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      {/* Ultra-minimal vertical progress bar */}
      <div className="relative h-full w-full">
        {/* Growing fill based on progress */}
        <motion.div
          className="absolute bottom-0 w-full bg-gradient-to-t from-purple-500 to-blue-500"
          initial={{ height: "0%" }}
          animate={{ height: `${progressPercentage}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Tiny floating step indicator that appears on hover */}
      <motion.div
        className="absolute top-4 right-3 flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-xs font-medium shadow-sm"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.9 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {currentStep}/{totalSteps}
        </span>
      </motion.div>
    </motion.div>
  );
}
