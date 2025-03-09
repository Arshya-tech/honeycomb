import { Button } from "@/components/ui/button";

interface Challenge {
  title: string;
  progress: {
    current: number;
    total: number;
    type: string;
  };
}

interface ChallengesProps {
  challenges: Challenge[];
}

export const Challenges = ({ challenges }: ChallengesProps) => {
  return (
    <div className="mt-2">
      <h3 className="mb-6 flex items-center gap-3 font-semibold text-zinc-700 md:text-lg">
        <span className="rounded-lg bg-rose-200 p-2 shadow-sm">🎯</span>
        Active Challenges
      </h3>
      <ul className="space-y-6">
        {challenges.map((challenge) => (
          <li
            key={challenge.title}
            className="group relative rounded-xl border-2 border-b-[5px] border-rose-200 bg-white p-5 shadow-md transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="aspect-square rounded-lg bg-rose-100 p-2">
                  <span className="text-xl">✨</span>
                </div>
                <span className="font-semibold text-zinc-800">
                  {challenge.title}
                </span>
              </div>
              <Button
                variant="default"
                size="sm"
                className="rounded-lg bg-rose-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-rose-600"
              >
                Start Challenge
              </Button>
            </div>
            <div className="mt-4">
              <p className="mb-2 text-sm font-medium text-gray-600">
                Progress: {challenge.progress.current}/
                {challenge.progress.total} {challenge.progress.type}
              </p>
              <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-rose-100">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-rose-400 to-rose-500 transition-all duration-500 group-hover:from-rose-500 group-hover:to-rose-600"
                  style={{
                    width: `${
                      (challenge.progress.current / challenge.progress.total) *
                      100
                    }%`,
                  }}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
