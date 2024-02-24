import { z } from "zod";

export const insertIssueSchema = z.object({
  name: z.string(),
  start_time: z.string(),
  end_time: z.string(),
  date_id: z.string(),
});

export const updateIssueSchema = z.object({
  name: z.string().optional(),
  start_time: z.string().optional(),
  end_time: z.string().optional(),
});
