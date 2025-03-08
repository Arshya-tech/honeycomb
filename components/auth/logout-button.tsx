"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

import { cn } from "@/lib/utils";

import { Button } from "../ui/button";

type Props = {
  title?: string;
  label?: string;
  className?: string;
  icon?: ReactNode;
};

export const LogoutButton = ({
  title,
  className,
  label = "Sign Out",
  icon,
}: Props) => {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/sign-in");
  };

  return (
    <Button
      title={title || "Sign Out"}
      onClick={handleSignOut}
      className={cn(className)}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </Button>
  );
};
