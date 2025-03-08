"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface SidebarNavItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
  isActive: boolean;
}

export const SidebarNavItem = ({
  icon: Icon,
  label,
  href,
  isActive,
}: SidebarNavItemProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "text-muted-foreground flex items-center font-bold transition hover:text-white/80",
        {
          "text-gray-50 hover:text-gray-50": isActive,
        },
      )}
    >
      <Icon className="mr-3" />
      {label}
    </Link>
  );
};
