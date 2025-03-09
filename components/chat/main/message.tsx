"use client";

import { User } from "lucide-react";
import { motion } from "motion/react";

import { AIAvatar } from "./ai-avatar";

export type MessageRole = "user" | "assistant";
export type MessageContentType = "text" | "interactive_budget" | "achievement";

interface InteractiveBudgetControl {
  type: "slider" | "button";
  label: string;
  min?: number;
  max?: number;
  action?: string;
}

interface InteractiveBudgetContent {
  question: string;
  controls: InteractiveBudgetControl[];
  purchaseItem?: string;
}

interface AchievementContent {
  title: string;
  description: string;
  xp: number;
  icon?: string;
}

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  type: MessageContentType;
  timestamp: Date;
  interactiveBudget?: InteractiveBudgetContent;
  achievement?: AchievementContent;
}

interface MessageProps {
  message: Message;
  index: number;
  onSimulate?: (purchaseItem: string) => void;
  onPaymentChange?: (amount: number) => void;
}

export const Message = ({
  message,
  index,
  onSimulate,
  onPaymentChange,
}: MessageProps) => {
  const isUser = message.role === "user";
  const isInteractive = message.type === "interactive_budget";
  const isAchievement = message.type === "achievement";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className={`flex w-full gap-3 ${isUser ? "justify-end" : "justify-start"}`}
    >
      {!isUser && <AIAvatar mood={isAchievement ? "celebrating" : "neutral"} />}

      <div
        className={`max-w-[80%] ${
          isUser
            ? "bg-primary text-primary-foreground rounded-3xl rounded-br-lg"
            : "bg-card text-card-foreground border-primary/10 rounded-3xl rounded-bl-lg border shadow-md"
        } ${isInteractive || isAchievement ? "border-primary/20" : ""} px-5 py-4`}
      >
        {isInteractive && message.interactiveBudget ? (
          <div className="space-y-4">
            <p className="text-base font-medium">
              {message.interactiveBudget.question}
            </p>
            <div className="space-y-3">
              {message.interactiveBudget.controls.map((control, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <label className="text-sm font-medium">{control.label}</label>
                  {control.type === "slider" && (
                    <input
                      type="range"
                      min={control.min}
                      max={control.max}
                      defaultValue={300} // Default value
                      className="bg-primary/20 h-3 w-full cursor-pointer appearance-none rounded-full"
                      onChange={(e) =>
                        onPaymentChange?.(parseInt(e.target.value))
                      }
                    />
                  )}
                  {control.type === "button" && (
                    <button
                      className="bg-primary text-primary-foreground rounded-full px-4 py-2 text-sm font-medium shadow-md transition-opacity hover:opacity-90"
                      onClick={() => {
                        if (
                          message.interactiveBudget?.purchaseItem &&
                          onSimulate
                        ) {
                          onSimulate(message.interactiveBudget.purchaseItem);
                        }
                      }}
                    >
                      {control.label}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : isAchievement && message.achievement ? (
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 text-primary border-primary/30 flex size-12 items-center justify-center rounded-full border-2 shadow-md">
                {message.achievement.icon || "🏆"}
              </div>
              <div>
                <h4 className="text-base font-bold">
                  {message.achievement.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {message.achievement.description}
                </p>
              </div>
            </div>
            <div className="bg-primary/10 border-primary/20 flex items-center justify-between rounded-full border px-5 py-3 shadow-sm">
              <span className="text-sm font-medium">XP Earned</span>
              <span className="text-primary text-lg font-bold">
                +{message.achievement.xp}
              </span>
            </div>
          </div>
        ) : (
          <p className="text-base">{message.content}</p>
        )}
      </div>

      {isUser && (
        <div className="bg-primary/20 border-primary/30 flex size-12 items-center justify-center rounded-full border-2 shadow-md">
          <User className="text-primary size-6" />
        </div>
      )}
    </motion.div>
  );
};
