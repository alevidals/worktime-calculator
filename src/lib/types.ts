import { z } from "zod";
import { addIssueSchema } from "./schema";

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

export type AddIssue = z.infer<typeof addIssueSchema>;
