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
    <div className="rounded-2xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100/50 p-6 shadow-lg md:p-8">
      <div className="flex items-center gap-8">
        <div className="group relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-75 blur-lg transition-opacity group-hover:opacity-100" />
          <div className="relative">
            <Image
              src={image || "/avatars/bear19.webp"}
              alt={`${name}'s Avatar`}
              width={90}
              height={90}
              className="rounded-full border-4 border-white shadow-xl transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute -top-1 -right-1 rounded-full bg-gradient-to-r from-green-400 to-green-500 p-2 shadow-lg ring-2 ring-white">
              <span className="block h-2 w-2 animate-pulse rounded-full bg-white" />
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tight text-blue-950">
            {name}
          </h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 px-4 py-2 shadow-md transition-transform hover:scale-105">
              <span className="text-lg">👑</span>
              <span className="font-bold text-white">{level}</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-emerald-100 px-4 py-2 shadow-md transition-transform hover:scale-105">
              <span className="text-lg">✨</span>
              <span className="font-bold text-emerald-700">
                {xp.toLocaleString()} PTS
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h3 className="mb-5 flex items-center gap-2 text-lg font-bold text-blue-950">
          <span className="rounded-lg bg-blue-100 p-2">🏆</span>
          Recent Badges
        </h3>
        <div className="flex flex-wrap gap-3">
          {badges.map((badge) => (
            <Badge
              key={badge.label}
              className={`${badge.color} hover:${badge.color} rounded-xl px-4 py-2 text-sm font-bold text-white shadow-md transition-all duration-300 hover:scale-105`}
            >
              <div className="flex items-center gap-2">
                <span className="rounded-lg bg-white/20 p-1">🏆</span>
                {badge.label}
              </div>
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};
