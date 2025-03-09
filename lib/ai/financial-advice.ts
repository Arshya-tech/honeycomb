import { formatChatHistory, geminiFlashLite } from "./index";

// Define the FinancialProfile type based on the schema
type FinancialProfile = {
  id: string;
  userId: string;
  employmentStatus: string;
  annualIncome: string;
  financialGoal: string;
  riskTolerance: string;
  knowledgeLevel: string;
  debtAmount: string;
  savingsAmount: string;
  monthlyExpenses: string;
  learningPath: string;
  createdAt: Date;
  updatedAt?: Date | null;
};

export async function generateFinancialAdvice({
  message,
  financialProfile,
  chatHistory = [],
}: {
  message: string;
  financialProfile: Partial<FinancialProfile>;
  chatHistory?: { role: string; content: string }[];
}) {
  // Create the system prompt with the user's financial profile
  const systemPrompt = `
    You're a friendly financial mentor for the app Honeycomb. The user's profile:
    - Employment: ${financialProfile.employmentStatus || "Unknown"}
    - Income: $${financialProfile.annualIncome || "Unknown"}/year
    - Goal: ${financialProfile.financialGoal || "Unknown"}
    - Risk Tolerance: ${financialProfile.riskTolerance || "Unknown"}
    - Knowledge: ${financialProfile.knowledgeLevel || "Unknown"}
    - Debt: $${financialProfile.debtAmount || "Unknown"}
    - Savings: $${financialProfile.savingsAmount || "Unknown"}
    - Monthly Expenses: $${financialProfile.monthlyExpenses || "Unknown"}
    - Learning Path: ${financialProfile.learningPath || "Unknown"}

    Guidelines:
    1. Always relate advice to their specific numbers
    2. Use simple analogies matching their knowledge level
    3. Suggest actions from their active learning path
    4. Never share generic financial advice
    5. Keep responses under 100 words
  `;

  try {
    // Prepare the chat history with the system prompt at the beginning
    const initialHistory = [
      {
        role: "user",
        content: systemPrompt,
      },
      {
        role: "model",
        content:
          "I understand your financial profile. How can I help you today?",
      },
    ];

    // Combine initial history with the provided chat history
    const fullHistory = [...initialHistory, ...chatHistory];

    // Create a chat with the full history as context
    const chat = geminiFlashLite.startChat({
      history: formatChatHistory(fullHistory),
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.7,
      },
    });

    // Send the actual user message
    const result = await chat.sendMessage(message);
    const response = result.response.text();

    return {
      response,
      type: "text",
    };
  } catch (error) {
    console.error("Error generating financial advice:", error);
    return {
      response:
        "Sorry, I encountered an error processing your request. Please try again.",
      type: "text",
    };
  }
}
