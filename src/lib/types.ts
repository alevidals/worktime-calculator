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

export type UserData = {
  email: string;
  accountId: string;
  name: string;
};

export type GetUserDataJiraResponse = {
  self: string;
  accountId: string;
  accountType: string;
  emailAddress: string;
  avatarUrls: {
    "48x48": string;
    "24x24": string;
    "16x16": string;
    "32x32": string;
  };
  displayName: string;
  active: boolean;
  timeZone: string;
  locale: string;
}[];

export type ExternalJiraIssue = {
  issues: {
    id: string;
    key: string;
    fields: {
      summary: string;
    };
  }[];
};

export type InternalJiraIssue = {
  id: string;
  key: string;
  name: string;
};

export type AddIssue = z.infer<typeof addIssueSchema>;
export type Login = z.infer<typeof loginSchema>;
