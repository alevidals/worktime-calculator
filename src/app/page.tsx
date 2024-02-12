"use client";

import { AddIssueButton } from "@/components/add-issue-button";
import { DeleteIssuesButton } from "@/components/delete-issues-button";
import { IssuesTable } from "@/components/issues-table";
import { issuesAtom } from "@/lib/store";
import { useAtomValue } from "jotai";

export default function Home() {
  const issues = useAtomValue(issuesAtom);

  return (
    <main className="max-w-2xl mx-auto py-5 max-h-screen h-screen flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Hello! 🔥</h1>
        <AddIssueButton />
      </div>
      <IssuesTable issues={issues} />
      <DeleteIssuesButton />
    </main>
  );
}
