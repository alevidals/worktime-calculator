import { z } from "zod";

export const addIssueSchema = z.object({
  name: z.string(),
  startTime: z.string(),
  endTime: z.string(),
});

export const loginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});
