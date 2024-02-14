"use client";

import { getSecondsFromTimeRange } from "@/lib/issues";
import { issuesAtom } from "@/lib/store";
import { GroupedIssue, Issue } from "@/lib/types";
import { useAtomValue } from "jotai";

function groupIssues(issues: Issue[]) {
  const groupedIssues = issues.reduce((acc, issue) => {
    const issueIndex = acc.findIndex((i) => i.name === issue.name);

    console.log(issueIndex);

    const workTime = getSecondsFromTimeRange({
      startTime: issue.startTime,
      endTime: issue.endTime,
    });

    if (issueIndex !== -1) {
      acc[issueIndex].workTime += workTime;
    } else {
      acc.push({
        name: issue.name,
        workTime: workTime,
      });
    }

    return acc;
  }, [] as GroupedIssue[]);

  return groupedIssues;
}

export default function SummaryPage() {
  const issues = useAtomValue(issuesAtom);

  const groupedIssues = groupIssues(issues);

  return (
    <div>
      <h1>Summary</h1>
      <pre>{JSON.stringify(issues, null, 2)}</pre>
      <pre>{JSON.stringify(groupedIssues, null, 2)}</pre>
    </div>
  );
}
