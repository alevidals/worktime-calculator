import { atomWithStorage } from "jotai/utils";
import { Issue } from "./types";

export const issuesAtom = atomWithStorage<Issue[]>("issues", []);
