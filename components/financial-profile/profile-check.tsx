"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface ProfileCheckProps {
  hasCompletedProfile: boolean;
}

export function ProfileCheck({ hasCompletedProfile }: ProfileCheckProps) {
  const router = useRouter();

  useEffect(() => {
    if (hasCompletedProfile) {
      router.push("/dashboard");
    }
  }, [hasCompletedProfile, router]);

  // This component doesn't render anything, it just handles the redirect
  return null;
}
