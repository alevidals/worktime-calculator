"use client";

import { formatWorkTimeFromSeconds, getTotalWorkTime } from "@/lib/issues";
import { issuesAtom } from "@/lib/store";
import { cn } from "@/lib/utils";
import dayjs from "dayjs";
import { useAtomValue } from "jotai";
import { IssuesTableDropdown } from "./issues-table-dropdown";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export function IssuesTable() {
  const issues = useAtomValue(issuesAtom);

  const totalWorkTime = getTotalWorkTime(issues);

  const secondsToWork = dayjs().day() !== 5 ? 30600 : 25200;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Issue</TableHead>
          <TableHead>Start Time</TableHead>
          <TableHead>End Time</TableHead>
          <TableHead>Work Time</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {issues.map((issue) => (
          <TableRow key={issue.id}>
            <TableCell>{issue.name}</TableCell>
            <TableCell>{issue.startTime}</TableCell>
            <TableCell>{issue.endTime}</TableCell>
            <TableCell>{formatWorkTimeFromSeconds(issue.workTime)}</TableCell>
            <TableCell>
              <IssuesTableDropdown issue={issue} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total</TableCell>
          <TableCell>
            <span
              className={cn(
                totalWorkTime === secondsToWork && "text-green-500 font-bold",
                totalWorkTime > secondsToWork && "text-red-500 font-extrabold"
              )}
            >
              {formatWorkTimeFromSeconds(totalWorkTime)}
            </span>{" "}
            / {formatWorkTimeFromSeconds(secondsToWork)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
