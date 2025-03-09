import { ReactNode } from "react";
import { MoreHorizontal } from "lucide-react";

interface TransactionListProps {
  title: string;
  children: ReactNode;
}

export const TransactionList = ({ title, children }: TransactionListProps) => {
  return (
    <div className="mb-8">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="font-semibold md:text-lg">{title}</h2>
        <button className="text-muted-foreground hover:text-background cursor-pointer">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </div>
      <hr className="border-t-2 border-gray-200" />
      <div className="divide-y divide-gray-200">{children}</div>
    </div>
  );
};
