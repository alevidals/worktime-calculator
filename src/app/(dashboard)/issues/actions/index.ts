"use server";

import { insertIssueSchema, updateIssueSchema } from "@/lib/schemas/issues";
import { createClient } from "@/lib/supabase/server";
import { InsertIssue, UpdateIssue } from "@/lib/types/issue";
import { revalidatePath } from "next/cache";

export async function insertIssue(data: InsertIssue) {
  const parseResult = insertIssueSchema.safeParse(data);

  if (!parseResult.success) {
    return {
      success: false,
    };
  }

  const supabase = createClient();

  const { error } = await supabase.from("issues").insert(parseResult.data);

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

export async function deleteIssue(id: string) {
  const supabase = createClient();

  const { error } = await supabase.from("issues").delete().eq("id", id);

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

export async function updateIssue(id: string, data: UpdateIssue) {
  const parseResult = updateIssueSchema.safeParse(data);

  if (!parseResult.success) {
    return {
      success: false,
    };
  }

  const supabase = createClient();

  const { error } = await supabase
    .from("issues")
    .update(parseResult.data)
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
