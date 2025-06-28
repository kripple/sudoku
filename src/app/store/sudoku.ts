import { makeAutoObservable } from 'mobx';
import type { Difficulty } from 'sudoku-gen/dist/types/difficulty.type';

import type { Data } from '@/types/data';

// https://mobx.js.org/defining-data-stores.html#domain-stores
class Sudoku {
  cellCount = 81 as const;
  cellsPerSet = 9 as const;
  setSize = 3 as const;
  difficultyOptions: Difficulty[] = [
    'easy',
    'medium',
    'hard',
    'expert',
  ] as const;
  data: Data | undefined;
  difficulty: Difficulty | undefined;

  constructor() {
    makeAutoObservable(this);
  }

  setDifficulty(value: Difficulty | undefined) {
    this.difficulty = value;
  }
}

export const sudoku = new Sudoku();
