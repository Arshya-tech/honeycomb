import { Sidebar } from "@/components/dashboard/sidebar";
import { MobileNavbar } from "@/components/dashboard/sidebar/mobile-navbar";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="flex gap-6 overflow-hidden p-2 md:p-4 lg:h-svh lg:p-6">
      <Sidebar />
      <div className="text-background flex flex-1 overflow-y-auto rounded-md bg-gray-50 lg:rounded-2xl">
        <main className="h-full w-full max-lg:pt-20">
          {/* mobile navbar */}
          <div className="fixed top-4 right-0 left-0 z-[9999] h-16 w-full px-2 sm:px-4 lg:hidden">
            <div className="mx-auto h-full max-w-7xl px-2">
              <MobileNavbar />
            </div>
          </div>
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
