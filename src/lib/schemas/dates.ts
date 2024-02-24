import { z } from "zod";

export const insertDateSchema = z.object({
  date: z.date(),
});

export const updateDateSchema = z.object({
  date: z.date(),
});
