"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

import { ChatInput } from "./chat-input";
import { ChatThread } from "./chat-thread";
import { MessageContentType, Message as MessageType } from "./message";

// Simple function to generate unique IDs
const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};

// Sample initial messages
const initialMessages: MessageType[] = [
  {
    id: "1",
    role: "assistant",
    content:
      "Hi there! I'm your financial assistant powered by Gemini 2.0 Flash. How can I help you today?",
    type: "text",
    timestamp: new Date(),
  },
];

export const ChatMain = () => {
  const [messages, setMessages] = useState<MessageType[]>(initialMessages);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState(300); // Default payment amount
  const [userProfile, setUserProfile] = useState({
    financialGoal: "",
    knowledgeLevel: "",
  });

  // Reference to the latest messages for use in callbacks
  const messagesRef = useRef<MessageType[]>(messages);
  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  // Fetch user profile data
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch("/api/financial-profile");
        if (response.ok) {
          const data = await response.json();
          if (data.profile) {
            setUserProfile({
              financialGoal: data.profile.financialGoal || "",
              knowledgeLevel: data.profile.knowledgeLevel || "",
            });
          }
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, []);

  // Handle simulation button click
  const handleSimulation = async (purchaseItem: string) => {
    if (isLoading) return;

    setIsLoading(true);

    // Create a simulation message
    const simulationMessage: MessageType = {
      id: generateId(),
      role: "user",
      content: `Simulate how a $${paymentAmount}/month ${purchaseItem} payment would affect my financial goals for 1 year`,
      type: "text",
      timestamp: new Date(),
    };

    // Add the simulation message to the chat
    setMessages((prev) => [...prev, simulationMessage]);

    // Get the current chat history for context
    const chatHistoryForApi = messagesRef.current
      .filter((msg) => msg.type === "text") // Only include text messages
      .map((msg) => ({
        role: msg.role,
        content: msg.content,
      }));

    try {
      // Call the chat API with the simulation request
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: simulationMessage.content,
          chatHistory: chatHistoryForApi,
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();

      // Create response message
      const responseMessage: MessageType = {
        id: generateId(),
        role: "assistant",
        content: data.response,
        type: data.type || "text",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, responseMessage]);
    } catch (error) {
      console.error("Simulation error:", error);

      // Add error message
      const errorMessage: MessageType = {
        id: generateId(),
        role: "assistant",
        content:
          error instanceof Error
            ? `Simulation error: ${error.message}`
            : "An error occurred during simulation",
        type: "text",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle payment slider change
  const handlePaymentChange = (amount: number) => {
    setPaymentAmount(amount);
  };

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    // Add user message
    const userMessage: MessageType = {
      id: generateId(),
      role: "user",
      content,
      type: "text",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    // Get the current chat history for context
    const chatHistoryForApi = messagesRef.current
      .filter((msg) => msg.type === "text") // Only include text messages
      .map((msg) => ({
        role: msg.role,
        content: msg.content,
      }));

    try {
      // Call the chat API with chat history
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: content,
          chatHistory: chatHistoryForApi,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.error ||
            `API error: ${response.status} ${response.statusText}`,
        );
      }

      const data = await response.json();

      if (!data.response) {
        throw new Error("Invalid response from API");
      }

      // Create response message based on API response
      const responseMessage: MessageType = {
        id: generateId(),
        role: "assistant",
        content: data.response,
        type: data.type || "text",
        timestamp: new Date(),
      };

      // Add additional data based on message type
      if (data.type === "interactive_budget" && data.interactiveBudget) {
        responseMessage.interactiveBudget = data.interactiveBudget;
      } else if (data.type === "achievement" && data.achievement) {
        responseMessage.achievement = data.achievement;
      }

      setMessages((prev) => [...prev, responseMessage]);
    } catch (error) {
      console.error("Error sending message:", error);

      // Add error message
      const errorMessage: MessageType = {
        id: generateId(),
        role: "assistant",
        content:
          error instanceof Error
            ? `Error: ${error.message}`
            : "Sorry, I encountered an error processing your request. Please try again.",
        type: "text",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex h-full w-full flex-col"
    >
      <ChatThread
        messages={messages}
        isLoading={isLoading}
        onSimulate={handleSimulation}
        onPaymentChange={handlePaymentChange}
      />

      <div className="border-primary/10 rounded-t-3xl border-t p-5 shadow-inner">
        <ChatInput
          onSendMessage={handleSendMessage}
          isLoading={isLoading}
          financialGoal={userProfile.financialGoal || "home purchase"}
          knowledgeLevel={userProfile.knowledgeLevel || "beginner"}
        />
      </div>
    </motion.div>
  );
};
