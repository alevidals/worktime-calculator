import dayjs from "dayjs";

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

// export function formatWorkTimeFromDateRange({
//   startTime,
//   endTime,
// }: {
//   startTime: string;
//   endTime: string;
// }) {
//   const splittedStartTime = startTime.split(":");
//   const splittedEndTime = endTime.split(":");

//   if (splittedStartTime.length !== 2 || splittedEndTime.length !== 2) return;

//   const startDateTime = dayjs()
//     .hour(Number(splittedStartTime[0]))
//     .minute(Number(splittedStartTime[1]));

//   const endDateTime = dayjs()
//     .hour(Number(splittedEndTime[0]))
//     .minute(Number(splittedEndTime[1]));

//   if (startDateTime.isAfter(endDateTime)) return;

//   const totalDifferenceInMinutes = endDateTime.diff(startDateTime, "minutes");

//   const hoursDiff = Math.floor(totalDifferenceInMinutes / 60);
//   const minutesDiff = totalDifferenceInMinutes % 60;

//   return `${hoursDiff}h ${minutesDiff}m`;
// }
