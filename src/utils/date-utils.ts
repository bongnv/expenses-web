import months from "@/data/months.json";

export function formatDate(d: Date): string {
  return d.toISOString().substr(0, 10);
}

export function parseDate(d: string): Date | undefined {
  const dateObj = new Date(d);
  if (Number.isNaN(dateObj.getTime())) {
    return undefined;
  }

  return dateObj;
}

export function beautyFormatDate(d: Date): string {
  return `${d.getDate()}-${months[d.getMonth()].shortForm}-${d.getFullYear()}`;
}

export function getShortMonth(month: number): string {
  return months[month - 1].value;
}
