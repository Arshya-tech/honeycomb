"use client";

import { usePathname } from "next/navigation";
import {
  BarChart2,
  FileText,
  LayoutDashboard,
  PiggyBank,
  Settings,
  Wallet,
} from "lucide-react";

import { SidebarNavItem } from "./nav-item";

const routes = [
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

export const SidebarNavigation = () => {
  const pathname = usePathname();

  return (
    <div className="mt-12 flex-1 overflow-y-auto p-6 2xl:p-8">
      <nav className="flex flex-col gap-6 text-xl 2xl:gap-10">
        {routes.map((route) => (
          <SidebarNavItem
            key={route.href}
            {...route}
            isActive={pathname === route.href}
          />
        ))}
      </nav>
    </div>
  );
};
