"use client";

import { usePathname } from "next/navigation";
import { motion } from "motion/react";

import { routes } from "@/config/navigation";

import { SidebarNavItem } from "./nav-item";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -20, filter: "blur(4px)" },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

interface SidebarNavigationProps {
  onClose?: () => void;
}

export const SidebarNavigation = ({ onClose }: SidebarNavigationProps) => {
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-12 flex-1 overflow-y-auto p-6 2xl:p-8"
    >
      <motion.nav
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-6 text-xl 2xl:gap-10"
      >
        {routes.map((route) => (
          <SidebarNavItem
            key={route.href}
            {...route}
            isActive={pathname === route.href}
            variants={item}
            onClose={onClose}
          />
        ))}
      </motion.nav>
    </motion.div>
  );
};
