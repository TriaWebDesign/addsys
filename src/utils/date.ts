import { Admission } from "@prisma/client";

export function countSubmissions(
  admissions: Admission[],
  interval: "day" | "week" | "month"
): number {
  const currentDate = new Date();

  return admissions.filter((admission) => {
    const submissionDate = new Date(admission.submittedAt);

    switch (interval) {
      case "day":
        return isSameDay(submissionDate, currentDate);
      case "week":
        return isSameWeek(submissionDate, currentDate);
      case "month":
        return isSameMonth(submissionDate, currentDate);
      default:
        return false;
    }
  }).length;
}

function isSameDay(date1: Date, date2: Date): boolean {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
}

function isSameWeek(date1: Date, date2: Date): boolean {
  const diffInDays =
    Math.abs(date1.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24);
  return diffInDays <= 6 && date1.getDay() >= date2.getDay();
}

function isSameMonth(date1: Date, date2: Date): boolean {
  return (
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
}
