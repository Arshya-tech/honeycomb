"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { MobileSidebar } from "./mobile-sidebar";

interface MobileNavbarProps {
  appName?: string;
}

export const MobileNavbar = ({ appName = "Honeycomb" }: MobileNavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "relative flex h-full items-center justify-between rounded-lg bg-zinc-900 px-4 text-white shadow-lg",
        )}
      >
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-primary font-bold md:text-lg"
        >
          {appName}
        </motion.p>

        <Button
          onClick={toggleSidebar}
          size="icon"
          variant="ghost"
          className="text-white hover:bg-white/10"
        >
          <motion.div
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <Menu className="size-5" />
          </motion.div>
        </Button>
      </motion.div>

      <MobileSidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
