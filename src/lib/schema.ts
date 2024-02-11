import { z } from "zod";

export const addIssueSchema = z.object({
  name: z.string(),
  startTime: z.string(),
  endTime: z.string(),
});
