import { Button } from "@/components/ui/button";

export const SavingsTipsCard = () => {
  return (
    <div className="relative mt-24 rounded-lg bg-gray-50 p-4 pt-12">
      <div className="flex items-start justify-between">
        <div className="mb-4">
          <h2 className="mb-4 text-xl font-medium">Save more money</h2>
          <p className="text-muted-foreground text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            tempora! Quos animi nesciunt in expedita.
          </p>
        </div>
        <div className="absolute -top-8 right-4">
          <div className="relative size-20">
            <div className="absolute bottom-0 left-0 h-16 w-12 rounded-md bg-blue-500" />
            <div className="absolute top-0 right-0 h-14 w-16 rounded-md bg-orange-400" />
            <div className="absolute top-16 right-4 h-8 w-8 rounded-full bg-blue-200" />
          </div>
        </div>
      </div>
      <Button className="mt-2 w-full" variant="default">
        VIEW TIPS
      </Button>
    </div>
  );
};
