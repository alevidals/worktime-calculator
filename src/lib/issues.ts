import dayjs from "dayjs";

export function getWorkTime({
  startTime,
  endTime,
}: {
  startTime: string;
  endTime: string;
}) {
  const splittedStartTime = startTime.split(":");
  const splittedEndTime = endTime.split(":");

  if (splittedStartTime.length !== 2 || splittedEndTime.length !== 2) return;

  const startDateTime = dayjs()
    .hour(Number(splittedStartTime[0]))
    .minute(Number(splittedStartTime[1]));

  const endDateTime = dayjs()
    .hour(Number(splittedEndTime[0]))
    .minute(Number(splittedEndTime[1]));

  if (startDateTime.isAfter(endDateTime)) return;

  const totalDifferenceInMinutes = endDateTime.diff(startDateTime, "minutes");

  const hoursDiff = Math.floor(totalDifferenceInMinutes / 60);
  const minutesDiff = totalDifferenceInMinutes % 60;

  return `${hoursDiff}h ${minutesDiff}m`;
}