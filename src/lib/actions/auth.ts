"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";
import { Login, Register } from "@/lib/types/auth";
import { loginSchema, signUpSchema } from "../schemas/auth";
import { parse } from "path";

export async function login(data: Login) {
  const parseResult = loginSchema.safeParse(data);

  if (!parseResult.success) {
    redirect("/error");
  }

  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword(parseResult.data);

  if (error) {
    redirect("/error");
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
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}
