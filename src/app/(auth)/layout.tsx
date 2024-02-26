import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

type AuthLayoutProps = {
  children: React.ReactNode;
};

export default async function AuthLayout({ children }: AuthLayoutProps) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/");
  }

  return (
    <div className="min-h-dvh flex items-center justify-center max-w-72 mx-auto">
      {children}
    </div>
  );
}
