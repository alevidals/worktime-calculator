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
  formatWorkTimeFromRange,
  formatWorkTimeFromSeconds,
  getTotalWorkTime,
} from "@/lib/issues";
import { Issue } from "@/lib/types/issue";
import { cn } from "@/lib/utils";
import dayjs from "dayjs";
import { IssuesTableDropdown } from "./issues-table-dropdown";

type Props = {
  issues: Issue[];
};

export function IssuesTable({ issues }: Props) {
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
            <TableCell className="w-40 max-w-40 truncate">
              {issue.name}
            </TableCell>
            <TableCell>{issue.start_time}</TableCell>
            <TableCell>{issue.end_time}</TableCell>
            <TableCell>
              {formatWorkTimeFromRange({
                startTime: issue.start_time,
                endTime: issue.end_time,
              })}
            </TableCell>
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
                totalWorkTime > secondsToWork && "text-red-500 font-extrabold",
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
