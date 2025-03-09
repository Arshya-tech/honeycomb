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
    <div className="border-primary/20 bg-primary/5 rounded-xl border border-b-4 p-4 md:p-8">
      <h2 className="font-heading mb-6 text-2xl font-bold text-yellow-700">
        🎮 Gamification Hub
      </h2>
      <Challenges challenges={challenges} />
    </div>
  );
};
