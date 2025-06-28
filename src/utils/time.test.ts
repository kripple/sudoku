import { expect, test } from '@playwright/test';

import {
  MS_PER_DAY,
  isSameDate,
  msUntilEndOfDay,
  toDate,
  toDatetime,
  toIso,
  toTimestamp,
} from './time';

test.describe('time', () => {
  test.describe('toDatetime', () => {
    test('appends T00:00:00.000Z to date string', () => {
      const input = '2025-06-03';
      const expected = '2025-06-03T00:00:00.000Z';
      const actual = toDatetime(input);
      expect(actual).toBe(expected);
    });
  });

  test.describe('toTimestamp', () => {
    test('converts ISO string to ms since epoch', () => {
      const input = '2025-06-03T00:00:00.000Z';
      const result = toTimestamp(input);
      const roundTrip = new Date(result).toISOString();
      expect(roundTrip).toBe(input);
    });
  });

  test.describe('toIso', () => {
    test('converts timestamp to ISO string', () => {
      const input = new Date('2025-06-03').getTime();
      const expected = '2025-06-03T00:00:00.000Z';
      const actual = toIso(input);
      expect(actual).toBe(expected);
    });
  });

  test.describe('toDate', () => {
    const iso = '2025-06-03T15:00:00.000Z';
    const dateString = '2025-06-03';

    test('extracts YYYY-MM-DD from ISO string', () => {
      expect(toDate(iso)).toBe(dateString);
    });

    test('extracts YYYY-MM-DD from timestamp', () => {
      const timestamp = new Date(iso).getTime();
      expect(toDate(timestamp)).toBe(dateString);
    });
  });

  test.describe('isSameDate', () => {
    test('returns true for timestamps on the same day (UTC)', () => {
      const today = toTimestamp(toDatetime('2025-06-03'));
      const alsoToday = today + 23 * 60 * 60 * 1000; // +23h
      expect(isSameDate([today, alsoToday])).toBe(true);
    });

    test('returns false for timestamps on different days (UTC)', () => {
      const today = toTimestamp(toDatetime('2025-06-03'));
      const notToday = today + 24 * 60 * 60 * 1000; // +24h
      expect(isSameDate([today, notToday])).toBe(false);
    });
  });

  test.describe('msUntilEndOfDay', () => {
    test('returns ms less than 24 hours', async () => {
      const ms = msUntilEndOfDay();
      expect(ms).toBeGreaterThanOrEqual(0);
      expect(ms).toBeLessThanOrEqual(MS_PER_DAY);
    });
  });
});
