import { Sidebar } from "@/components/dashboard/sidebar";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="flex gap-6 overflow-hidden p-2 md:p-4 lg:h-svh lg:p-6">
      <Sidebar />
      <div className="text-background flex flex-1 overflow-y-auto rounded-md bg-gray-50 lg:rounded-2xl">
        <main className="h-full w-full">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
