import {
  BarChart2,
  LayoutDashboard,
  LineChart,
  Settings,
  Trophy,
  Wallet,
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
    label: "Accounts",
    icon: Wallet,
    href: "/accounts",
  },
  {
    label: "Budget",
    icon: BarChart2,
    href: "/budget",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];
