import { expect, test } from '@playwright/test';

import { getColId, getRowId, getSetId } from './game';

// prettier-ignore
const expectedRowIds = [
  1, 1, 1, 1, 1, 1, 1, 1, 1,
  2, 2, 2, 2, 2, 2, 2, 2, 2,
  3, 3, 3, 3, 3, 3, 3, 3, 3,
  4, 4, 4, 4, 4, 4, 4, 4, 4,
  5, 5, 5, 5, 5, 5, 5, 5, 5,
  6, 6, 6, 6, 6, 6, 6, 6, 6,
  7, 7, 7, 7, 7, 7, 7, 7, 7,
  8, 8, 8, 8, 8, 8, 8, 8, 8,
  9, 9, 9, 9, 9, 9, 9, 9, 9,
];

// prettier-ignore
const expectedColIds = [
  1, 2, 3, 4, 5, 6, 7, 8, 9,
  1, 2, 3, 4, 5, 6, 7, 8, 9,
  1, 2, 3, 4, 5, 6, 7, 8, 9,
  1, 2, 3, 4, 5, 6, 7, 8, 9,
  1, 2, 3, 4, 5, 6, 7, 8, 9,
  1, 2, 3, 4, 5, 6, 7, 8, 9,
  1, 2, 3, 4, 5, 6, 7, 8, 9,
  1, 2, 3, 4, 5, 6, 7, 8, 9,
  1, 2, 3, 4, 5, 6, 7, 8, 9,
];

// prettier-ignore
const expectedSetIds = [
  1, 1, 1, 2, 2, 2, 3, 3, 3,
  1, 1, 1, 2, 2, 2, 3, 3, 3,
  1, 1, 1, 2, 2, 2, 3, 3, 3,
  4, 4, 4, 5, 5, 5, 6, 6, 6,
  4, 4, 4, 5, 5, 5, 6, 6, 6,
  4, 4, 4, 5, 5, 5, 6, 6, 6,
  7, 7, 7, 8, 8, 8, 9, 9, 9,
  7, 7, 7, 8, 8, 8, 9, 9, 9,
  7, 7, 7, 8, 8, 8, 9, 9, 9,
] as const;

test.describe('game utils', () => {
  for (let i = 0; i < 81; i++) {
    test(`index '${i}' has row id '${expectedRowIds[i]}'`, () => {
      expect(getRowId(i)).toBe(expectedRowIds[i]);
    });
    test(`index '${i}' has col id '${expectedColIds[i]}'`, () => {
      expect(getColId(i)).toBe(expectedColIds[i]);
    });
    test(`index '${i}' has set id '${expectedSetIds[i]}'`, () => {
      expect(getSetId(i)).toBe(expectedSetIds[i]);
    });
  }
});
