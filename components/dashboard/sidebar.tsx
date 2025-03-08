"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart2,
  FileText,
  LayoutDashboard,
  PiggyBank,
  Settings,
  Wallet,
} from "lucide-react";

import { cn } from "@/lib/utils";

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

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "flex h-full w-64 flex-col py-20 max-lg:hidden 2xl:w-80",
        className,
      )}
    >
      {/* User profile section */}
      <div className="flex flex-col justify-center p-6 2xl:p-8">
        <div className="relative size-16 overflow-hidden rounded-md">
          <Image
            src="/avatars/bear2.webp"
            alt="Profile"
            width={64}
            height={64}
            className="object-cover"
          />
        </div>
        <h2 className="mt-4 text-xl font-bold 2xl:text-2xl">Bebicat</h2>
      </div>

      {/* Navigation links */}
      <div className="mt-12 flex-1 overflow-y-auto p-6 2xl:p-8">
        <nav className="flex flex-col gap-6 text-2xl 2xl:gap-10">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-muted-foreground flex items-center font-bold transition hover:text-white/80",
                {
                  "text-gray-50 hover:text-gray-50": pathname === route.href,
                },
              )}
            >
              <route.icon className="mr-3" />
              {route.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};
