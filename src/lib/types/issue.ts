import { Database } from "@/lib/types/supabase";

export type Issue = Pick<
  Database["public"]["Tables"]["issues"]["Row"],
  "id" | "name" | "start_time" | "end_time"
>;

export type InsertIssue = Pick<
  Database["public"]["Tables"]["issues"]["Row"],
  "name" | "start_time" | "end_time" | "date_id"
>;

export type UpdateIssue = Partial<
  Pick<
    Database["public"]["Tables"]["issues"]["Row"],
    "name" | "start_time" | "end_time"
  >
>;
