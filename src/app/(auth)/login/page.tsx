import { LoginForm } from "@/components/login-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export default async function LoginPage() {
  return (
    <div className="flex-1">
      <LoginForm />
      <div className="mt-4">
        <a href="/register" className="underline text-sm">
          Don&apos;t have an account? Register now!
        </a>
      </div>
    </div>
  );
}
