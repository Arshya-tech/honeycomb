"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";

import { SidebarNavigation } from "./navigation";
import { SidebarUserProfile } from "./user-profile";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileSidebar = ({ isOpen, onClose }: MobileSidebarProps) => {
  const { data } = useSession();

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="bg-background fixed top-0 right-0 z-50 flex h-full w-full flex-col rounded-l-3xl shadow-xl sm:w-[340px]"
          >
            <div className="flex h-24 items-center justify-between border-b border-white/10 px-8">
              <h2 className="text-xl font-bold text-white">Honeycomb</h2>
              <Button
                onClick={onClose}
                size="icon"
                variant="ghost"
                className="rounded-xl text-white transition-all hover:scale-110 hover:bg-white/10"
              >
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="size-5" />
                </motion.div>
              </Button>
            </div>
            <div className="flex flex-1 flex-col gap-6 -space-y-12 overflow-y-auto p-6">
              <SidebarUserProfile user={data?.user} />
              <SidebarNavigation />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
