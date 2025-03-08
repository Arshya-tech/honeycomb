"use client";

import Image from "next/image";
import { LogOut } from "lucide-react";
import { User } from "next-auth";

import { LogoutButton } from "@/components/auth/logout-button";

interface SidebarUserProfileProps {
  user: User | undefined;
}

export const SidebarUserProfile = ({ user }: SidebarUserProfileProps) => {
  return (
    <div className="flex flex-col border-b p-6 2xl:p-8">
      <div className="flex items-start gap-x-4">
        <div className="border-border/40 relative size-16 overflow-hidden rounded-lg border shadow-sm transition-transform hover:scale-105">
          <Image
            src={user?.image || "/avatars/bear19.webp"}
            alt="Profile"
            width={64}
            height={64}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <h2 className="text-lg font-semibold tracking-tight">{user?.name}</h2>
          <p className="text-muted-foreground/80 text-sm font-medium">
            {user?.email}
          </p>
        </div>
      </div>
      <div className="mt-6">
        <LogoutButton
          className="text-muted-foreground/70 w-fit cursor-pointer justify-start bg-transparent p-0 text-xs font-medium tracking-wide hover:bg-transparent hover:text-white/90"
          icon={<LogOut className="size-3" />}
        />
      </div>
    </div>
  );
};
