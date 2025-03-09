import { GoogleGenerativeAI } from "@google/generative-ai";

if (!process.env.GOOGLE_AI_API_KEY) {
  throw new Error("Missing GOOGLE_AI_API_KEY environment variable");
}

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY);

export type ChatMessage = {
  role: string;
  content: string;
};

// Helper function to format chat history
export function formatChatHistory(messages: ChatMessage[]) {
  return messages.map((msg) => ({
    role: msg.role === "user" ? "user" : "model",
    parts: [{ text: msg.content }],
  }));
}

// Flash-Lite model for fast responses
export const geminiFlashLite = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-lite",
  generationConfig: {
    maxOutputTokens: 1000,
    temperature: 0.7,
  },
});

// Pro model for complex tasks
export const geminiPro = genAI.getGenerativeModel({
  model: "gemini-2.0-pro",
  generationConfig: {
    maxOutputTokens: 2000, // Higher token limit for complex responses
    temperature: 0.9, // Slightly higher temperature for more creative responses
  },
});
