import { LoginForm } from "@/components/login-form";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export default function LoginPage() {
  return (
    <div className="flex-1">
      <LoginForm />
      <div className="mt-4">
        <Link href="/register" className="underline text-sm">
          Don&apos;t have an account? Register now!
        </Link>
      </div>
    </div>
  );
}
