"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "../supabase/server";
import { InsertDate } from "../types/dates";
import { format } from "@formkit/tempo";
import { insertDateSchema } from "../schemas/dates";

export async function inserDate(data: InsertDate) {
  const parseResult = insertDateSchema.safeParse(data);

  if (!parseResult.success) {
    return {
      success: false,
    };
  }

  const supabase = createClient();

  const { error } = await supabase.from("dates").insert({
    date: format(parseResult.data.date, "YYYY-MM-DD"),
  });

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
