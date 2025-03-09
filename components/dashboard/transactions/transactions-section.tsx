import { Bus, Film, Home, ShoppingCart, Utensils } from "lucide-react";

import { TransactionItem } from "./transaction-item";
import { TransactionList } from "./transaction-list";

export const TransactionsSection = () => {
  return (
    <div className="space-y-6">
      <TransactionList title="Today">
        <TransactionItem
          icon={<ShoppingCart className="size-6 text-white" />}
          title="Grocery"
          time="5:12 pm"
          location="Toronto"
          amount={-326.8}
          cashback={7.8}
          index={0}
        />
        <TransactionItem
          icon={<Bus className="size-6 text-white" />}
          title="Transportation"
          time="5:12 pm"
          location="Toronto"
          amount={-15.0}
          cashback={0.96}
          index={1}
        />
        <TransactionItem
          icon={<Home className="size-6 text-white" />}
          title="Housing"
          time="5:12 pm"
          location="Toronto"
          amount={-185.75}
          cashback={5.75}
          index={2}
        />
      </TransactionList>

      <TransactionList title="Monday, 23 March 2020">
        <TransactionItem
          icon={<Utensils className="size-6 text-white" />}
          title="Food and Drink"
          time="5:12 pm"
          location="Makan Steak"
          amount={-156.0}
          cashback={3.6}
          index={3}
        />
        <TransactionItem
          icon={<Film className="size-6 text-white" />}
          title="Entertainment"
          time="5:12 pm"
          location="Nonton Bioskop"
          amount={-35.2}
          cashback={1.45}
          index={4}
        />
      </TransactionList>
    </div>
  );
};
