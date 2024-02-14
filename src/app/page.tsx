"use client";

import { AddIssueButton } from "@/components/add-issue-button";
import { DeleteIssuesButton } from "@/components/delete-issues-button";
import { IssuesTable } from "@/components/issues-table";
import { issuesAtom } from "@/lib/store";
import { useAtomValue } from "jotai";

export default function Home() {
  const issues = useAtomValue(issuesAtom);

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Hello Alejandro!</h1>
        <AddIssueButton />
      </div>
      <IssuesTable issues={issues} />
      <div className="fixed bottom-4 right-4 flex items-center gap-x-3">
        <DeleteIssuesButton />
      </div>
    </>
  );
}
