"use client";

export function SummaryTable() {
  return (
    <div>
      <h1>Summary Table</h1>
    </div>
  );

  // const groupedIssues = groupIssues(issues);
  // const totalWorkTime = getTotalWorkTime(issues);

  // return (
  //   <Table>
  //     <TableHeader>
  //       <TableRow>
  //         <TableHead>Issue</TableHead>
  //         <TableHead>Work Time</TableHead>
  //         <TableHead>Percentage</TableHead>
  //       </TableRow>
  //     </TableHeader>
  //     <TableBody>
  //       {groupedIssues.map((issue) => (
  //         <TableRow key={issue.name}>
  //           <TableCell className="w-40 max-w-40 truncate">
  //             {issue.name}
  //           </TableCell>
  //           <TableCell>{formatWorkTimeFromSeconds(issue.workTime)}</TableCell>
  //           <TableCell>{issue.percentage.toFixed(2)}%</TableCell>
  //         </TableRow>
  //       ))}
  //     </TableBody>
  //     <TableFooter>
  //       <TableRow>
  //         <TableCell colSpan={2}>Total</TableCell>
  //         <TableCell>{formatWorkTimeFromSeconds(totalWorkTime)}</TableCell>
  //       </TableRow>
  //     </TableFooter>
  //   </Table>
  // );
}
