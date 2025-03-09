"use client";

import { ChartBar, CreditCard, HelpCircle, Target } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";

interface QuickActionButtonsProps {
  onActionClick: (action: string) => void;
  financialGoal?: string;
  knowledgeLevel?: string;
}

export const QuickActionButtons = ({
  onActionClick,
  financialGoal = "retirement",
  knowledgeLevel = "beginner",
}: QuickActionButtonsProps) => {
  const actions = [
    {
      id: "goal-tracking",
      label: `How am I doing on my ${financialGoal} goal?`,
      icon: <Target className="size-5" />,
    },
    {
      id: "purchase-advice",
      label: "I want to make a big purchase - should I?",
      icon: <CreditCard className="size-5" />,
    },
    {
      id: "learning",
      label: `Explain investments like I'm ${knowledgeLevel}`,
      icon: <HelpCircle className="size-5" />,
    },
    {
      id: "simulation",
      label: "Show me how a purchase would affect my budget",
      icon: <ChartBar className="size-5" />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-3 grid grid-cols-2 gap-3"
    >
      {actions.map((action, index) => (
        <motion.div
          key={action.id}
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: index * 0.15,
            type: "spring",
            stiffness: 200,
          }}
          whileHover={{
            scale: 1.02,
            y: -2,
            transition: { duration: 0.2 },
          }}
          whileTap={{
            scale: 0.95,
            y: 2,
            transition: { duration: 0.1 },
          }}
        >
          <Button
            variant="outline"
            size="sm"
            className={`rounded-full border-3 px-4 py-3 text-sm font-medium shadow-lg transition-all hover:shadow-md ${
              index % 4 === 0
                ? "border-green-300 bg-green-50 text-green-700"
                : index % 4 === 1
                  ? "border-blue-300 bg-blue-50 text-blue-700"
                  : index % 4 === 2
                    ? "border-purple-300 bg-purple-50 text-purple-700"
                    : "border-orange-300 bg-orange-50 text-orange-700"
            }`}
            onClick={() => onActionClick(action.id)}
          >
            <span
              className={`mr-2.5 inline-flex items-center justify-center rounded-full p-2 shadow-sm ${
                index % 4 === 0
                  ? "bg-green-200 text-green-800"
                  : index % 4 === 1
                    ? "bg-blue-200 text-blue-800"
                    : index % 4 === 2
                      ? "bg-purple-200 text-purple-800"
                      : "bg-orange-200 text-orange-800"
              }`}
            >
              {action.icon}
            </span>
            <span className="line-clamp-1">{action.label}</span>
          </Button>
        </motion.div>
      ))}
    </motion.div>
  );
};
