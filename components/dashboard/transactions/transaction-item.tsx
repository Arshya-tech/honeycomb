import { ReactNode } from "react";

const BG_COLORS = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-purple-500",
  "bg-yellow-500",
  "bg-indigo-500",
  "bg-pink-500",
  "bg-teal-500",
];

interface TransactionItemProps {
  icon: ReactNode;
  title: string;
  time: string;
  location: string;
  amount: number;
  cashback?: number;
  index: number;
}

export const TransactionItem = ({
  icon,
  title,
  time,
  location,
  amount,
  cashback,
  index,
}: TransactionItemProps) => {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center gap-4">
        <div
          className={`flex size-12 items-center justify-center rounded-full ${
            BG_COLORS[index % BG_COLORS.length]
          }`}
        >
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-zinc-700">{title}</h3>
          <div className="text-muted-foreground flex items-center gap-2 text-sm">
            <span>{time}</span>
            <span>•</span>
            <span>{location}</span>
          </div>
        </div>
      </div>
      <div className="text-right">
        <p className="font-medium">{amount.toFixed(2)}</p>
        {/* {cashback !== undefined && (
          <p className="text-primary text-sm">{cashback.toFixed(2)}</p>
        )} */}
      </div>
    </div>
  );
};
