// import { nanoid } from 'nanoid';
// import confetti from 'canvas-confetti';
// import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
// import { getSudoku } from 'sudoku-gen';
// import type { Difficulty } from 'sudoku-gen/dist/types/difficulty.type';
// import type { Sudoku } from 'sudoku-gen/dist/types/sudoku.type';

// https://mobx.js.org/defining-data-stores.html#domain-stores
class Store {
  cellCount = 81 as const;
  cellsPerSet = 9 as const;
  setSize = 3 as const;

  constructor() {}
}

export const store = new Store();
