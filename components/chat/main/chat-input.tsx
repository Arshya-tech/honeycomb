"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { QuickActionButtons } from "./quick-action-buttons";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading?: boolean;
  financialGoal?: string;
  knowledgeLevel?: string;
}

export const ChatInput = ({
  onSendMessage,
  isLoading = false,
  financialGoal,
  knowledgeLevel,
}: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleQuickAction = (action: string) => {
    let actionMessage = "";

    switch (action) {
      case "goal-tracking":
        actionMessage = `How am I doing on my ${financialGoal} goal?`;
        break;
      case "purchase-advice":
        actionMessage = "I want to make a big purchase - should I?";
        break;
      case "learning":
        actionMessage = `Explain investments like I'm ${knowledgeLevel}`;
        break;
      case "simulation":
        actionMessage = "Show me how a purchase would affect my budget";
        break;
      default:
        actionMessage = action;
    }

    onSendMessage(actionMessage);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-3"
    >
      <QuickActionButtons
        onActionClick={handleQuickAction}
        financialGoal={financialGoal}
        knowledgeLevel={knowledgeLevel}
      />

      <form onSubmit={handleSubmit} className="flex gap-3">
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask about your finances, goals, or learning path..."
          className="border-primary/20 min-h-[65px] flex-1 resize-none rounded-3xl border-2 p-4 text-base shadow-lg"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
        />
        <Button
          type="submit"
          disabled={!message.trim() || isLoading}
          className="h-auto self-end rounded-full p-3 shadow-md transition-transform hover:scale-105"
        >
          <Send className="size-6" />
        </Button>
      </form>
    </motion.div>
  );
};
