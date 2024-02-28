import { checkAuth } from "@/app/(auth)/actions";
import { getSizeCookie } from "@/app/(dashboard)/utils.server";
import { CommandMenu } from "@/components/command-menu";
import { Navbar } from "@/components/navbar";
import { cn, screenSizes } from "@/lib/utils";
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

  const size = getSizeCookie();

  return (
    <div className="p-4 min-h-dvh">
      <Navbar />
      <main
        className={cn(
          "transition-all duration-200 ease-in-out",
          screenSizes[size],
          "mt-4 mx-auto",
        )}
      >
        {children}
      </main>
      <CommandMenu />
    </div>
  );
}
