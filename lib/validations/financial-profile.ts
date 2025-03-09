import { z } from "zod";

export const financialProfileSchema = z.object({
  employmentStatus: z.enum([
    "employed",
    "self_employed",
    "unemployed",
    "student",
  ]),
  annualIncome: z.string(),
  financialGoal: z.enum([
    "save",
    "invest",
    "debt",
    "budget",
    "financial_literacy",
  ]),
  riskTolerance: z.enum(["low", "medium", "high"]),
  knowledgeLevel: z.enum(["beginner", "intermediate", "advanced"]),
  debtAmount: z.string(),
  savingsAmount: z.string(),
  monthlyExpenses: z.string(),
});

export type FinancialProfileFormData = z.infer<typeof financialProfileSchema>;

export interface Recommendation {
  learningPath: {
    title: string;
    description: string;
  };
  challenges: {
    title: string;
    completed: boolean;
  }[];
  tips: string[];
  nextSteps: string[];
}
