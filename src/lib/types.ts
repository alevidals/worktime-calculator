import { z } from "zod";
import { addIssueSchema, loginSchema } from "./schema";

export type Issue = {
  id: string;
  name: string;
  startTime: string;
  endTime: string;
  workTime: number;
};

export type GroupedIssue = {
  name: string;
  workTime: number;
  percentage: number;
};

// Schemas
export type AddIssue = z.infer<typeof addIssueSchema>;
export type Login = z.infer<typeof loginSchema>;
