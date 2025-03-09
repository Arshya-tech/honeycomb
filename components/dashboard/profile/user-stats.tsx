import Image from "next/image";

import { Badge } from "@/components/ui/badge";

interface UserStatsProps {
  name: string;
  level: string;
  image: string | null;
  xp: number;
  badges: Array<{
    label: string;
    color: string;
  }>;
}

export const UserStats = ({
  name,
  level,
  xp,
  badges,
  image,
}: UserStatsProps) => {
  return (
    <div className="rounded-xl border border-b-4 border-gray-200 bg-white p-4 md:p-8">
      <div className="flex items-center gap-6">
        <div className="relative">
          <Image
            src={image || "/avatars/bear19.webp"}
            alt={`${name}'s Avatar`}
            width={80}
            height={80}
            className="rounded-full border-4 border-blue-300 transition-transform hover:scale-105"
          />
          <div className="absolute -top-1 -right-1 rounded-full bg-green-500 p-1.5 shadow-md ring-2 ring-white">
            <span className="block h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-blue-950">
            {name}
          </h2>
          <div className="mt-2 flex items-center gap-3">
            <span className="rounded-md bg-gradient-to-r from-yellow-400 to-amber-500 px-3 py-1 text-sm font-bold text-white shadow-inner">
              {level}
            </span>
            <span className="flex items-center gap-1 text-sm font-bold text-emerald-600">
              {xp.toLocaleString()} PTS ✨
            </span>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="mb-4 text-lg font-bold text-blue-950">Recent Badges</h3>
        <div className="flex flex-wrap gap-2.5">
          {badges.map((badge) => (
            <Badge
              key={badge.label}
              className={`${badge.color} hover:${badge.color} px-3.5 py-1.5 text-sm font-bold text-white transition-all`}
            >
              {badge.label} 🏆
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};
