// Mock data for challenges
export const ACTIVE_CHALLENGES = [
  {
    id: 1,
    title: "Save $50 This Week",
    icon: "💰",
    description: "Track your expenses daily and save $50 by Friday",
    points: 200,
    progress: 3,
    totalSteps: 5,
    status: "In Progress",
    category: "Savings",
    difficulty: "Medium",
    daysLeft: 3,
    steps: [
      "Log into the app daily",
      "Track at least 3 expenses each day",
      "Identify one unnecessary expense to cut",
      "Transfer $10 to savings each day",
      "Reach $50 in savings by Friday",
    ],
    tips: [
      "Cut coffee shop visits to save $20 this week!",
      "Try meal prepping to reduce food expenses",
      "Use public transportation instead of rideshares",
    ],
    reward: "Earn 200 points + Budgeting Pro Badge",
  },
  {
    id: 2,
    title: "Complete Investing 101 Quiz",
    icon: "📚",
    description: "Learn the basics of investing and test your knowledge",
    points: 150,
    progress: 0,
    totalSteps: 1,
    status: "New",
    category: "Education",
    difficulty: "Easy",
    daysLeft: 7,
    steps: [
      "Read the Investing 101 guide",
      "Watch the introduction to stocks video",
      "Complete the 10-question quiz",
    ],
    tips: [
      "Focus on understanding the difference between stocks and bonds",
      "Take notes while reading the guide",
      "Don't rush - accuracy matters more than speed",
    ],
    reward: "Earn 150 points + Investment Novice Badge",
  },
  {
    id: 3,
    title: "Track All Expenses for 7 Days",
    icon: "📊",
    description: "Log every purchase you make for a full week",
    points: 300,
    progress: 5,
    totalSteps: 7,
    status: "Almost Done!",
    category: "Budgeting",
    difficulty: "Medium",
    daysLeft: 2,
    steps: [
      "Set up expense categories",
      "Log all purchases immediately",
      "Categorize each expense correctly",
      "Add notes for context when needed",
      "Review daily spending patterns",
    ],
    tips: [
      "Keep receipts for all purchases",
      "Set reminders to log expenses at lunch and dinner",
      "Use the quick-add feature for small purchases",
    ],
    reward: "Earn 300 points + Expense Tracking Master Badge",
  },
  {
    id: 4,
    title: "Refer a Friend",
    icon: "👥",
    description: "Invite a friend to join the platform",
    points: 100,
    progress: 0,
    totalSteps: 1,
    status: "New",
    category: "Community",
    difficulty: "Easy",
    daysLeft: 14,
    steps: [
      "Share your referral link with a friend",
      "Have them sign up using your link",
      "Help them complete their first challenge",
    ],
    tips: [
      "Share your success story to convince friends",
      "Explain the benefits they'll receive",
      "Offer to guide them through the onboarding process",
    ],
    reward: "Earn 100 points per referral + Social Butterfly Badge",
  },
  {
    id: 5,
    title: "Create an Emergency Fund",
    icon: "🛡️",
    description: "Start building your financial safety net",
    points: 250,
    progress: 1,
    totalSteps: 4,
    status: "In Progress",
    category: "Savings",
    difficulty: "Hard",
    daysLeft: 10,
    steps: [
      "Set a target amount for your emergency fund",
      "Open a high-yield savings account",
      "Set up automatic transfers",
      "Reach 25% of your target amount",
    ],
    tips: [
      "Aim for 3-6 months of essential expenses",
      "Look for accounts with no minimum balance requirements",
      "Start small with weekly transfers of $20-$50",
    ],
    reward: "Earn 250 points + Financial Security Badge",
  },
];

export const COMPLETED_CHALLENGES = [
  {
    id: 101,
    title: "Create a Monthly Budget",
    icon: "📝",
    description: "Plan your income and expenses for the month",
    points: 200,
    completedDate: "March 2, 2025",
    category: "Budgeting",
    difficulty: "Medium",
  },
  {
    id: 102,
    title: "Link Your Bank Account",
    icon: "🏦",
    description: "Connect your accounts for automatic tracking",
    points: 100,
    completedDate: "February 28, 2025",
    category: "Setup",
    difficulty: "Easy",
  },
  {
    id: 103,
    title: "Take the Financial Literacy Quiz",
    icon: "🧠",
    description: "Test your knowledge of personal finance basics",
    points: 150,
    completedDate: "February 25, 2025",
    category: "Education",
    difficulty: "Medium",
  },
];

export const UPCOMING_CHALLENGES = [
  {
    id: 201,
    title: "Debt Reduction Challenge",
    icon: "💸",
    description: "Create a plan to reduce your highest-interest debt",
    points: 350,
    availableDate: "March 15, 2025",
    category: "Debt Management",
    difficulty: "Hard",
  },
  {
    id: 202,
    title: "Automate Your Savings",
    icon: "⚙️",
    description: "Set up recurring transfers to your savings account",
    points: 200,
    availableDate: "March 12, 2025",
    category: "Savings",
    difficulty: "Easy",
  },
];

// Rewards data
export const REWARDS = [
  {
    title: "$10 Cashback at Partner Stores",
    points: 1000,
    image: "💳",
  },
  {
    title: "Budgeting Pro NFT Badge",
    points: 500,
    image: "🏆",
  },
  {
    title: "20% Off Financial Coaching",
    points: 2000,
    image: "👨‍🏫",
  },
  {
    title: "Premium Dashboard Features",
    points: 1500,
    image: "✨",
  },
];

// Leaderboard data
export const LEADERBOARD = [
  { name: "Sarah", points: 1200, position: 1 },
  { name: "Michael", points: 950, position: 2 },
  { name: "Jessica", points: 820, position: 3 },
  { name: "David", points: 780, position: 4 },
  { name: "Emily", points: 650, position: 5 },
];

// FAQ data
export const FAQS = [
  {
    question: "How do I earn points?",
    answer:
      "You earn points by completing challenges, tracking expenses, learning financial concepts, and inviting friends to join the platform.",
  },
  {
    question: "What happens if I miss a challenge?",
    answer:
      "No worries! Challenges rotate weekly, and you can always try again. There's no penalty for missing a challenge.",
  },
  {
    question: "How do I redeem rewards?",
    answer:
      "Go to the Rewards page, select the reward you want to redeem, and click 'Redeem Now'. Points will be automatically deducted from your balance.",
  },
];

// Types
export type Challenge = {
  id: number;
  title: string;
  icon: string;
  description: string;
  points: number;
  category: string;
  difficulty: string;
};

export type ActiveChallenge = Challenge & {
  progress: number;
  totalSteps: number;
  status: string;
  daysLeft: number;
  steps: string[];
  tips: string[];
  reward: string;
};

export type CompletedChallenge = Challenge & {
  completedDate: string;
};

export type UpcomingChallenge = Challenge & {
  availableDate: string;
};

export type Reward = {
  title: string;
  points: number;
  image: string;
};

export type LeaderboardUser = {
  name: string;
  points: number;
  position: number;
};

export type FAQ = {
  question: string;
  answer: string;
};
