import { Challenges } from "./challenges";

interface GamificationHubProps {
  challenges: {
    title: string;
    progress: {
      current: number;
      total: number;
      type: string;
    };
  }[];
}

export const GamificationHub = ({ challenges }: GamificationHubProps) => {
  return (
    <div className="rounded-2xl border-2 border-rose-300 bg-gradient-to-br from-rose-50 to-rose-100/50 p-6 shadow-lg md:p-8">
      <h2 className="font-heading mb-8 flex items-center gap-3 text-2xl font-bold text-rose-700">
        <span className="rounded-xl bg-rose-200 p-2 shadow-sm">🎮</span>
        Gamification Hub
      </h2>
      <Challenges challenges={challenges} />
    </div>
  );
};
