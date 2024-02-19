"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatWorkTimeFromSeconds, groupIssues } from "@/lib/issues";
import { issuesAtom } from "@/lib/store";
import { useAtomValue } from "jotai";

export function SummaryTable() {
  const issues = useAtomValue(issuesAtom);

  const groupedIssues = groupIssues(issues);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Issue</TableHead>
          <TableHead>Work Time</TableHead>
          <TableHead>Percentage</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {groupedIssues.map((issue) => (
          <TableRow key={issue.name}>
            <TableCell>{issue.name}</TableCell>
            <TableCell>{formatWorkTimeFromSeconds(issue.workTime)}</TableCell>
            <TableCell>{issue.percentage.toFixed(2)}%</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
