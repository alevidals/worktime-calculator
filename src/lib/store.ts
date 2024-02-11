import { atom } from "jotai";
import { Issue } from "./types";

const issues = localStorage.getItem("issues");

export const issuesAtom = atom<Issue[]>(
  issues ? (JSON.parse(issues) as Issue[]) : []
);
