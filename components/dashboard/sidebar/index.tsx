"use client";

import { useSession } from "next-auth/react";

import { cn } from "@/lib/utils";

import { SidebarNavigation } from "./navigation";
import { SidebarUserProfile } from "./user-profile";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const { data } = useSession();

  return (
    <div
      className={cn(
        "flex h-full w-64 flex-col py-20 max-lg:hidden 2xl:w-80",
        className,
      )}
    >
      <SidebarUserProfile user={data?.user} />
      <SidebarNavigation />
    </div>
  );
};
