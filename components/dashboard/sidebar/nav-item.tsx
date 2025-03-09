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
  onClose?: () => void;
  variants?: {
    hidden: { opacity: number; x: number; filter: string };
    show: {
      opacity: number;
      filter: string;
      x: number;
      transition: {
        duration: number;
      };
    };
  };
}

export const SidebarNavItem = ({
  icon: Icon,
  label,
  href,
  isActive,
  variants,
  onClose,
}: SidebarNavItemProps) => {
  return (
    <motion.div
      variants={variants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={href}
        onClick={onClose}
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
        <motion.div transition={{ duration: 0.5 }}>
          <Icon className="mr-3" />
        </motion.div>
        <span>{label}</span>
      </Link>
    </motion.div>
  );
};
