import { checkAuth } from "@/lib/actions/auth";
import { redirect } from "next/navigation";

type AuthLayoutProps = {
  children: React.ReactNode;
};

export default async function AuthLayout({ children }: AuthLayoutProps) {
  const isAuthenticated = await checkAuth();

  if (isAuthenticated) {
    return redirect("/");
  }

  return (
    <div className="min-h-dvh flex items-center justify-center max-w-72 mx-auto">
      {children}
    </div>
  );
}
