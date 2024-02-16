import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { Issue, UserData } from "./types";

export const issuesAtom = atomWithStorage<Issue[]>("issues", []);

export const userDataAtom = atom<UserData | null>(null);
