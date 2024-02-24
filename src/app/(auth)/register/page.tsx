import { RegisterForm } from "@/components/register-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
  description: "Register for an account",
};

export default function RegisterPage() {
  return <RegisterForm />;
}
