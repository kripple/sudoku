import { makeAutoObservable } from 'mobx';
import type { Difficulty } from 'sudoku-gen/dist/types/difficulty.type';
import type { Sudoku as Game } from 'sudoku-gen/dist/types/sudoku.type';

type Cell = {
  index: number;
  rowId: number;
  colId: number;
  setId: number;
  solution: string;
  value: string;
  locked: boolean;
  userCandidates: string;
  excludedAutoCandidates: string;
};

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
  difficulty: Difficulty | undefined;
  puzzle: string | undefined;
  solution: string | undefined;

  constructor() {
    makeAutoObservable(this);
  }

  selectDifficulty({ difficulty, puzzle, solution }: Game) {
    this.difficulty = difficulty;
    this.puzzle = puzzle;
    this.solution = solution;
  }

  unselectDifficulty() {
    this.difficulty = undefined;
    this.puzzle = undefined;
    this.solution = undefined;
  }

  getCell(id: number) {
    return {
      value: this.puzzle?.[id],
      solution: this.solution?.[id],
    };
  }
}

export const sudoku = new Sudoku();
