import dayjs from "dayjs";
import { GroupedIssue, Issue } from "./types";

export function getSecondsFromTimeRange({
  startTime,
  endTime,
}: {
  startTime: string;
  endTime: string;
}) {
  const splittedStartTime = startTime.split(":");
  const splittedEndTime = endTime.split(":");

  if (splittedStartTime.length !== 2 || splittedEndTime.length !== 2)
    throw new Error();

  const startDateTime = dayjs()
    .hour(Number(splittedStartTime[0]))
    .minute(Number(splittedStartTime[1]));

  const endDateTime = dayjs()
    .hour(Number(splittedEndTime[0]))
    .minute(Number(splittedEndTime[1]));

  if (startDateTime.isAfter(endDateTime)) throw new Error();

  const seconds = endDateTime.diff(startDateTime, "seconds");

  return seconds;
}

export function formatWorkTimeFromSeconds(seconds: number) {
  const minutes = seconds / 60;

  const hoursDiff = Math.floor(minutes / 60);
  const minutesDiff = minutes % 60;

  return `${hoursDiff}h ${minutesDiff}m`;
}

export function groupIssues(issues: Issue[]) {
  if (!issues) return [];

  const groupedIssues: Record<string, GroupedIssue> = {};
  const totalWorkTime = issues.reduce((acc, issue) => {
    return (
      acc +
      getSecondsFromTimeRange({
        startTime: issue.startTime,
        endTime: issue.endTime,
      })
    );
  }, 0);

  for (const issue of issues) {
    const workTime = getSecondsFromTimeRange({
      startTime: issue.startTime,
      endTime: issue.endTime,
    });

    if (groupedIssues[issue.name]) {
      groupedIssues[issue.name].workTime += workTime;
      groupedIssues[issue.name].percentage =
        (groupedIssues[issue.name].workTime / totalWorkTime) * 100;
    } else {
      groupedIssues[issue.name] = {
        name: issue.name,
        workTime: workTime,
        percentage: (workTime / totalWorkTime) * 100,
      };
    }
  }

  return Object.values(groupedIssues).sort((a, b) => b.workTime - a.workTime);
}
