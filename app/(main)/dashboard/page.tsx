import { getCurrentUser } from "@/auth";

import { LogoutButton } from "@/components/auth/logout-button";

const DashboardPage = async () => {
  const user = await getCurrentUser();

  if (user) {
    return (
      <div className="mx-auto flex min-h-svh flex-col items-center justify-center gap-12 bg-gray-50">
        <p>Currently logged in as {user.name || user.email}</p>
        <LogoutButton />
      </div>
    );
  }

  return <div>No user</div>;
};
export default DashboardPage;
