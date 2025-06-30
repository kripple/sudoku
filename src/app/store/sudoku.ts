import { makeAutoObservable } from 'mobx';
import type { Difficulty } from 'sudoku-gen/dist/types/difficulty.type';
import type { Sudoku as Game } from 'sudoku-gen/dist/types/sudoku.type';

class Cell {
  index: number;
  rowId: number;
  colId: number;
  setId: number;
  solution: string;
  value: string;
  locked: boolean;
  userCandidates: string = '';
  excludedAutoCandidates: string = '';
  private empty = '-' as const;
  private getColId = (index: number) => (index % 9) + 1;
  private getRowId = (index: number) => Math.floor(index / 9) + 1;
  private getSetId = (index: number) => {
    const row = Math.floor(index / 9);
    const col = index % 9;
    const setRow = Math.floor(row / 3);
    const setCol = Math.floor(col / 3);
    return setRow * 3 + setCol + 1;
  };

  constructor(cell: { index: number; value: string; solution: string }) {
    makeAutoObservable(this);
    this.index = cell.index;
    this.value = cell.value;
    this.solution = cell.solution;
    this.rowId = this.getRowId(cell.index);
    this.colId = this.getColId(cell.index);
    this.setId = this.getSetId(cell.index);
    this.locked = cell.value !== this.empty;
  }
}

// https://mobx.js.org/defining-data-stores.html#domain-stores
class Sudoku {
  difficultyOptions: Difficulty[] = [
    'easy',
    'medium',
    'hard',
    'expert',
  ] as const;
  difficulty: Difficulty | undefined;
  puzzle: string | undefined;
  solution: string | undefined;
  selected: Cell['index'] | undefined;
  date: string | undefined;

  constructor() {
    makeAutoObservable(this);
  }

  selectDifficulty({
    game: { difficulty, puzzle, solution },
    date,
  }: {
    game: Game;
    date: string;
  }) {
    this.difficulty = difficulty;
    this.puzzle = puzzle;
    this.solution = solution;
    this.date = date;
    // TODO: autoselect first empty cell
  }

  unselectDifficulty() {
    this.difficulty = undefined;
    this.puzzle = undefined;
    this.solution = undefined;
    this.date = undefined;
  }

  toggleSelectCell(id: number | undefined) {
    this.selected = this.selected === id ? undefined : id;
  }

  getCell(id: number) {
    // save cell instances ?
    return this.difficulty
      ? {
          ...new Cell({
            index: id,
            value: this.puzzle![id],
            solution: this.solution![id],
          }),
          selected: this.selected === id,
        }
      : undefined;
  }
}

export const sudoku = new Sudoku();
