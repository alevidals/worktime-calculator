import { Database } from "@/lib/types/supabase";

// export type InsertDate = Pick<
//   Database["public"]["Tables"]["dates"]["Row"],
//   "date"
// >;

export type InsertDate = {
  date: Date;
};

export type UpdateDate = Partial<
  Pick<Database["public"]["Tables"]["dates"]["Row"], "date">
>;
