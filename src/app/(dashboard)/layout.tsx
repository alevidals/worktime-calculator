import { checkAuth } from "@/app/(auth)/actions";
import { CommandMenu } from "@/components/command-menu";
import { Navbar } from "@/components/navbar";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuthenticated = await checkAuth();

  if (!isAuthenticated) {
    redirect("/login");
  }

  return (
    <div className="p-4 min-h-dvh">
      <Navbar />
      <main className="max-w-xl mt-4 mx-auto">{children}</main>
      <CommandMenu />
    </div>
  );
}
