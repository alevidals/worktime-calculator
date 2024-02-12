import { getWorkTime } from "@/lib/issues";
import { Issue } from "@/lib/types";
import { IssuesTableDropdown } from "./issues-table-dropdown";
import {
  Table as ShadCnTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export function IssuesTable({ issues }: { issues: Issue[] }) {
  return (
    <ShadCnTable>
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
              <IssuesTableDropdown issue={issue} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </ShadCnTable>
  );
}
