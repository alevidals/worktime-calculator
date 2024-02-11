import { z } from "zod";
import { addIssueSchema } from "./schema";

export type Issue = {
  id: string;
  name: string;
  startTime: string;
  endTime: string;
};

export type AddIssue = z.infer<typeof addIssueSchema>;
