export function formatDate(d: Date): string {
  return d.toISOString().substr(0, 10);
}

export function parseDate(d: string): Date | undefined {
  const dateObj = new Date(d);
  if (isNaN(dateObj.getTime())) {
    return undefined;
  }

  return dateObj;
}

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

export function beautyFormatDate(d: Date): string {
  return d.getDate() + "-" + months[d.getMonth()] + "-" + d.getFullYear();
}
