"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  formatWorkTimeFromSeconds,
  getTotalWorkTime,
  groupIssues,
} from "@/lib/issues";
import { issuesAtom } from "@/lib/store";
import { useAtomValue } from "jotai";

export function SummaryTable() {
  const issues = useAtomValue(issuesAtom);

  const groupedIssues = groupIssues(issues);
  const totalWorkTime = getTotalWorkTime(issues);

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
            <TableCell className="w-40 max-w-40 truncate">
              {issue.name}
            </TableCell>
            <TableCell>{formatWorkTimeFromSeconds(issue.workTime)}</TableCell>
            <TableCell>{issue.percentage.toFixed(2)}%</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell>{formatWorkTimeFromSeconds(totalWorkTime)}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
