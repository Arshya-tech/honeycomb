import { motion } from "motion/react";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  return (
    <motion.div className="fixed top-0 right-0 left-0 h-1">
      <motion.div
        className="bg-primary/30 h-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: currentStep / totalSteps }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
