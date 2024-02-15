"use client";

import { SummaryTable } from "@/components/summary-table";
import { groupIssues } from "@/lib/issues";
import { issuesAtom } from "@/lib/store";
import { useAtomValue } from "jotai";

export default function SummaryPage() {
  const issues = useAtomValue(issuesAtom);

  const groupedIssues = groupIssues(issues);

  return (
    <>
      <h1 className="text-2xl font-bold mb-4 h-9 flex items-center">Summary</h1>
      <SummaryTable groupedIssues={groupedIssues} />
    </>
  );
}
