"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";

export const SidebarUserProfile = () => {
  const { data } = useSession();

  if (!data?.user) return null;

  return (
    <div className="flex flex-col justify-center p-6 2xl:p-8">
      <div className="relative size-16 overflow-hidden rounded-md">
        <Image
          src={"/avatars/bear2.webp"}
          alt="Profile"
          width={64}
          height={64}
          className="object-cover"
        />
      </div>
      <h2 className="mt-4 text-xl font-bold">Bebicat</h2>
    </div>
  );
};
