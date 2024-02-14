import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatWorkTimeFromSeconds } from "@/lib/issues";
import { GroupedIssue } from "@/lib/types";

export function SummaryTable({
  groupedIssues,
}: {
  groupedIssues: GroupedIssue[];
}) {
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
