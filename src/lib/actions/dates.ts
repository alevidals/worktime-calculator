"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "../supabase/server";
import { InsertDate, UpdateDate } from "../types/dates";
import { format } from "@formkit/tempo";
import { insertDateSchema } from "../schemas/dates";
import { redirect } from "next/navigation";

export async function insertDate(data: InsertDate) {
  const parseResult = insertDateSchema.safeParse(data);

  if (!parseResult.success) {
    return {
      success: false,
    };
  }

  const supabase = createClient();

  const { data: date, error } = await supabase
    .from("dates")
    .insert({
      date: format(parseResult.data.date, "YYYY-MM-DD"),
    })
    .select("id")
    .single();

  if (error) {
    return {
      success: false,
    };
  }

  return redirect(`/issues/${date.id}`);
}

export async function deleteDate(id: string) {
  const supabase = createClient();

  const { error } = await supabase.from("dates").delete().eq("id", id);

  if (error) {
    return {
      success: false,
    };
  }

  redirect("/");

  return {
    success: true,
  };
}

export async function updateDate(id: string, data: UpdateDate) {
  const supabase = createClient();

  const { error } = await supabase
    .from("dates")
    .update({
      date: format(data.date, "YYYY-MM-DD"),
    })
    .eq("id", id);

  if (error) {
    return {
      success: false,
    };
  }

  revalidatePath("/", "layout");

  return {
    success: true,
  };
}
