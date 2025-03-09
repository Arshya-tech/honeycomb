import { FinancialProfileFormData } from "@/lib/validations/financial-profile";

import { FormStep } from "./types";

export const financialGoals = [
  {
    id: "save",
    label: "Save Money",
    description: "Build an emergency fund or save for a specific goal",
    icon: "PiggyBank",
  },
  {
    id: "invest",
    label: "Invest",
    description: "Grow your wealth through investments",
    icon: "TrendingUp",
  },
  {
    id: "debt",
    label: "Pay Off Debt",
    description: "Reduce or eliminate your existing debt",
    icon: "CreditCard",
  },
  {
    id: "budget",
    label: "Budget Better",
    description: "Track and optimize your spending habits",
    icon: "BarChart2",
  },
  {
    id: "financial_literacy",
    label: "Learn Financial Literacy",
    description: "Improve your understanding of personal finance",
    icon: "BookOpen",
  },
];

// Define the knowledge level options
export const knowledgeLevels = [
  {
    id: "beginner",
    label: "Beginner",
    description: "I'm just starting my financial journey",
  },
  {
    id: "intermediate",
    label: "Intermediate",
    description: "I understand the basics but want to learn more",
  },
  {
    id: "advanced",
    label: "Advanced",
    description: "I'm experienced and looking to optimize my finances",
  },
];

// Define the monthly spending ranges
export const monthlySpendingRanges = [
  {
    id: "low",
    label: "Less than $1,000",
    value: 1000,
  },
  {
    id: "medium_low",
    label: "$1,000 - $2,500",
    value: 2500,
  },
  {
    id: "medium",
    label: "$2,500 - $5,000",
    value: 5000,
  },
  {
    id: "medium_high",
    label: "$5,000 - $10,000",
    value: 10000,
  },
  {
    id: "high",
    label: "More than $10,000",
    value: 15000,
  },
];

// Define the monthly income ranges
export const monthlyIncomeRanges = [
  {
    id: "low",
    label: "Less than $2,000",
    value: 2000,
  },
  {
    id: "medium_low",
    label: "$2,000 - $4,000",
    value: 4000,
  },
  {
    id: "medium",
    label: "$4,000 - $7,000",
    value: 7000,
  },
  {
    id: "medium_high",
    label: "$7,000 - $12,000",
    value: 12000,
  },
  {
    id: "high",
    label: "More than $12,000",
    value: 20000,
  },
];

// Define the financial challenges
export const financialChallenges = [
  {
    id: "saving",
    label: "Saving consistently",
  },
  {
    id: "debt",
    label: "Managing debt",
  },
  {
    id: "investing",
    label: "Understanding investments",
  },
  {
    id: "budgeting",
    label: "Sticking to a budget",
  },
  {
    id: "emergency_fund",
    label: "Building an emergency fund",
  },
  {
    id: "retirement",
    label: "Planning for retirement",
  },
  {
    id: "financial_literacy",
    label: "Understanding financial terms and concepts",
  },
  {
    id: "impulse_spending",
    label: "Controlling impulse spending",
  },
  {
    id: "income",
    label: "Increasing my income",
  },
  {
    id: "other",
    label: "Other",
  },
];

export const employmentStatuses = [
  {
    id: "employed",
    label: "Employed",
    description: "Working for an employer",
  },
  {
    id: "self_employed",
    label: "Self-Employed",
    description: "Running your own business or freelancing",
  },
  {
    id: "unemployed",
    label: "Unemployed",
    description: "Currently not working",
  },
  {
    id: "student",
    label: "Student",
    description: "Full-time or part-time student",
  },
];

export const riskToleranceLevels = [
  {
    id: "low",
    label: "Conservative",
    description: "I prefer stable, low-risk investments",
  },
  {
    id: "medium",
    label: "Moderate",
    description: "I can tolerate some risk for potential higher returns",
  },
  {
    id: "high",
    label: "Aggressive",
    description: "I'm comfortable with high-risk, high-reward investments",
  },
];

// Define the financial profile quiz steps
export const financialProfileSteps: FormStep[] = [
  {
    id: "employmentStatus",
    title: "What's your current employment status?",
    description: "Select your primary source of income.",
    type: "single_select",
    options: employmentStatuses,
  },
  {
    id: "annualIncome",
    title: "What's your annual income?",
    description: "Enter your total yearly income before taxes.",
    type: "text_input",
    placeholder: "Enter your annual income...",
  },
  {
    id: "financialGoal",
    title: "What's your primary financial goal?",
    description:
      "Select the goal that best aligns with your current priorities.",
    type: "single_select",
    options: financialGoals,
  },
  {
    id: "riskTolerance",
    title: "What's your investment risk tolerance?",
    description: "This helps us recommend suitable investment strategies.",
    type: "single_select",
    options: riskToleranceLevels,
  },
  {
    id: "knowledgeLevel",
    title: "How would you rate your financial knowledge?",
    description: "This helps us tailor content to your experience level.",
    type: "single_select",
    options: knowledgeLevels,
  },
  {
    id: "debtAmount",
    title: "What's your current total debt?",
    description: "Include all loans, credit cards, and other debt.",
    type: "text_input",
    placeholder: "Enter your total debt amount...",
  },
  {
    id: "savingsAmount",
    title: "How much do you have in savings?",
    description: "Include emergency funds and other liquid savings.",
    type: "text_input",
    placeholder: "Enter your total savings amount...",
  },
  {
    id: "monthlyExpenses",
    title: "What are your average monthly expenses?",
    description: "Include all regular monthly spending.",
    type: "text_input",
    placeholder: "Enter your monthly expenses...",
  },
];

// Define the learning paths based on financial goals
export const learningPaths = {
  save: {
    title: "Savings Master",
    description:
      "Learn strategies to save more effectively and build your emergency fund.",
    challenges: [
      "Track your expenses for a week",
      "Set up an automatic savings transfer",
      "Find three expenses you can reduce",
    ],
  },
  invest: {
    title: "Investment Explorer",
    description:
      "Discover the fundamentals of investing and building wealth over time.",
    challenges: [
      "Learn about different investment types",
      "Set your investment goals",
      "Create a simple investment plan",
    ],
  },
  debt: {
    title: "Debt Destroyer",
    description:
      "Develop a plan to systematically reduce and eliminate your debt.",
    challenges: [
      "List all your debts with interest rates",
      "Create a debt payoff strategy",
      "Find ways to reduce interest costs",
    ],
  },
  budget: {
    title: "Budget Builder",
    description:
      "Master the art of budgeting and take control of your finances.",
    challenges: [
      "Create a monthly budget",
      "Track all expenses for two weeks",
      "Identify spending patterns and opportunities",
    ],
  },
  financial_literacy: {
    title: "Financial Scholar",
    description:
      "Build a strong foundation of financial knowledge and concepts.",
    challenges: [
      "Learn 5 key financial terms",
      "Understand how interest works",
      "Explore different account types",
    ],
  },
};
