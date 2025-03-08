import { AnimatePresence, motion } from "motion/react";

interface OnboardingSectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
  isVisible: boolean;
}

export function OnboardingSection({
  title,
  description,
  children,
  isVisible,
}: OnboardingSectionProps) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex flex-col"
        >
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.3 }}
            className="text-primary text-4xl font-bold"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-muted-foreground mt-6 text-xl"
          >
            {description}
          </motion.p>
          <motion.div
            className="bg-card border-border mt-6 flex-1 rounded-lg border p-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
