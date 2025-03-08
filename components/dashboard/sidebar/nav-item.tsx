"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { motion } from "motion/react";

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
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={href}
        className={cn(
          "text-muted-foreground relative flex items-center font-bold",
          {
            "text-gray-50": isActive,
          },
        )}
      >
        <motion.div
          className="bg-primary absolute -left-2 h-full w-1 rounded-full"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: isActive ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
        <motion.div
          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="mr-3" />
        </motion.div>
        <span>{label}</span>
      </Link>
    </motion.div>
  );
};
