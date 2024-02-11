"use client";

import { AddIssueButton } from "@/components/add-issue-button";
import { IssuesTable } from "@/components/issues-table";
import { issuesAtom } from "@/lib/store";
import { useAtomValue } from "jotai";

export default function Home() {
  const issues = useAtomValue(issuesAtom);

  return (
    <main className="max-w-2xl mx-auto py-5 h-screen">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Hello! 🔥</h1>
        <AddIssueButton />
      </div>
      {issues.length > 0 ? (
        <IssuesTable issues={issues} />
      ) : (
        <p className="text-gray-500">
          You don&apos;t have any issues yet. Click the button above to add one.
        </p>
      )}
    </main>
  );
}
