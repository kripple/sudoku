export const MS_PER_DAY = 24 * 60 * 60 * 1000;

// assumes utcDate is valid YYYY-MM-DD
export const toDatetime = (utcDate: string) => `${utcDate}T00:00:00.000Z`;

export const toTimestamp = (utcDateTime: string) =>
  new Date(utcDateTime).getTime();

export const toIso = (timestamp: number) => new Date(timestamp).toISOString();

export function toDate(utcDateTime: string): string;
export function toDate(utcTimestamp: number): string;
export function toDate(value: string | number) {
  return (typeof value === 'number' ? toIso(value) : value).slice(0, 10);
}

// expects array of length 2 (not optimized for large arrays)
export const isSameDate = (timestamps: number[]) =>
  timestamps.every((t, _, [ref]) => toDate(ref) === toDate(t));

// calculates time remaining until next UTC midnight
export const msUntilEndOfDay = () => {
  const now = Date.now(); // ms since Unix epoch, always in UTC
  const tomorrow = toTimestamp(toDatetime(toDate(now))) + MS_PER_DAY;
  return tomorrow - now;
};
