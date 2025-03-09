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
  // Determine which emoji to show based on the title
  const getEmoji = (title: string) => {
    if (title.includes("Learning")) return "📚";
    if (title.includes("Challenges")) return "🎯";
    if (title.includes("Coach")) return "🤖";
    if (title.includes("Rewards")) return "🏆";
    return "✨";
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex flex-col"
        >
          <motion.div
            className="mb-8 flex items-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
          >
            <div className="aspect-square rounded-xl bg-green-100 p-4 shadow-sm">
              <span className="text-2xl">{getEmoji(title)}</span>
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold text-gray-900">
                {title}
              </h2>
              <p className="mt-2 text-lg text-gray-600">{description}</p>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 rounded-2xl border-2 border-b-4 border-gray-200 bg-gradient-to-br from-gray-50 to-white p-6 shadow-lg md:p-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
