import { getWorkTime } from "@/lib/issues";
import { Issue } from "@/lib/types";
import { IssuesTableActions } from "./issues-table-actions";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export function IssuesTable({ issues }: { issues: Issue[] }) {
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
            <TableCell>
              <IssuesTableActions issue={issue} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
