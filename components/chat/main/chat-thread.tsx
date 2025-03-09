"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";

import { Message, type Message as MessageType } from "./message";

interface ChatThreadProps {
  messages: MessageType[];
  isLoading?: boolean;
  onSimulate?: (purchaseItem: string) => void;
  onPaymentChange?: (amount: number) => void;
}

export const ChatThread = ({
  messages,
  isLoading = false,
  onSimulate,
  onPaymentChange,
}: ChatThreadProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-[calc(100svh-320px)] flex-1 flex-col-reverse gap-4 overflow-y-auto p-3 sm:gap-8 sm:p-6"
    >
      {messages.length === 0 ? (
        <div className="flex h-full flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-primary/10 border-primary/20 flex size-20 items-center justify-center rounded-full border-2 shadow-lg sm:size-28 sm:border-4"
            whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
          >
            <Image
              width={64}
              height={64}
              className="rounded-full sm:size-24"
              src="/avatars/bear16.webp"
              alt="Financial Assistant"
            />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-xl font-bold sm:mt-6 sm:text-2xl"
          >
            Your Financial Assistant
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-muted-foreground mt-2 max-w-[280px] text-center text-base sm:max-w-md sm:text-lg"
          >
            Ask me anything about your finances, goals, or learning path!
          </motion.p>
        </div>
      ) : (
        <>
          {messages.map((message, index) => (
            <Message
              key={message.id}
              message={message}
              index={index}
              onSimulate={onSimulate}
              onPaymentChange={onPaymentChange}
            />
          ))}

          {isLoading && (
            <div className="ml-8 flex items-center gap-2 sm:ml-14 sm:gap-3">
              <motion.div
                className="bg-primary/20 border-primary/10 size-10 rounded-full border-2 shadow-md"
                animate={{
                  scale: [1, 1.2, 1],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
              <motion.div
                className="bg-primary/30 border-primary/10 size-10 rounded-full border-2 shadow-md"
                animate={{
                  scale: [1, 1.2, 1],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 1.5,
                  delay: 0.2,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
              <motion.div
                className="bg-primary/40 border-primary/10 size-10 rounded-full border-2 shadow-md"
                animate={{
                  scale: [1, 1.2, 1],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 1.5,
                  delay: 0.4,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
            </div>
          )}

          <div ref={messagesEndRef} />
        </>
      )}
    </motion.div>
  );
};
