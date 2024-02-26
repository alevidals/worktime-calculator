"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { loginSchema, signUpSchema } from "@/lib/schemas/auth";
import { createClient } from "@/lib/supabase/server";
import { Login, Register } from "@/lib/types/auth";

export async function login(data: Login) {
  const parseResult = loginSchema.safeParse(data);

  if (!parseResult.success) {
    redirect("/error");
  }

  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword(parseResult.data);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(data: Register) {
  const parseResult = signUpSchema.safeParse(data);

  if (!parseResult.success) {
    redirect("/error");
  }

  const supabase = createClient();

  const { error } = await supabase.auth.signUp(parseResult.data);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signOut() {
  const supabase = createClient();

  await supabase.auth.signOut();

  redirect("/login");
}
