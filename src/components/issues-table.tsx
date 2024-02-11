import { Issue } from "@/lib/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { randomUUID } from "crypto";
import { getWorkTime } from "@/lib/issues";

export function IssuesTable() {
  const issues: Issue[] = [
    {
      id: randomUUID(),
      name: "Add dark mode",
      startTime: "9:00",
      endTime: "10:00",
    },
    {
      id: randomUUID(),
      name: "Add light mode",
      startTime: "9:00",
      endTime: "10:00",
    },
  ];

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
            <TableCell>
              {getWorkTime({
                startTime: issue.startTime,
                endTime: issue.endTime,
              })}
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
