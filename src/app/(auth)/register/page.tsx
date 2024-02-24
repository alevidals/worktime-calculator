import { RegisterForm } from "@/components/register-form";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Register",
  description: "Register for an account",
};

export default function RegisterPage() {
  return (
    <div className="flex-1">
      <RegisterForm />
      <div className="mt-4">
        <Link href="/login" className="underline text-sm">
          Already have an account? Log in now!
        </Link>
      </div>
    </div>
  );
}
