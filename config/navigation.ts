import {
  BarChart2,
  FileText,
  LayoutDashboard,
  PiggyBank,
  Settings,
  Wallet,
} from "lucide-react";

export const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    label: "Savings",
    icon: PiggyBank,
    href: "/savings",
  },
  {
    label: "Budget",
    icon: BarChart2,
    href: "/budget",
  },
  {
    label: "Summary",
    icon: FileText,
    href: "/summary",
  },
  {
    label: "Accounts",
    icon: Wallet,
    href: "/accounts",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];
