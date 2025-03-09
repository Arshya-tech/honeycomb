import {
  LayoutDashboard,
  LineChart,
  MessageSquare,
  Settings,
  Trophy,
} from "lucide-react";

export const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    label: "Challenges",
    icon: Trophy,
    href: "/challenges",
  },
  {
    label: "Financial Profile",
    icon: LineChart,
    href: "/financial-profile",
  },
  {
    label: "Chat",
    icon: MessageSquare,
    href: "/chat",
  },
  // {
  //   label: "Accounts",
  //   icon: Wallet,
  //   href: "/accounts",
  // },
  // {
  //   label: "Budget",
  //   icon: BarChart2,
  //   href: "/budget",
  // },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];
