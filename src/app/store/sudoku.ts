import { makeAutoObservable } from 'mobx';
import type { Difficulty } from 'sudoku-gen/dist/types/difficulty.type';
import type { Sudoku as Game } from 'sudoku-gen/dist/types/sudoku.type';

import { formatDate as format } from '@/utils/time';

type Games = {
  [difficulty in Difficulty]: Game;
};

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

//   const disabled =
//     sudoku.reduce((count, cell) => {
//       if (cell.value === key && cell.value === cell.solution) {
//         return count + 1;
//       } else {
//         return count;
//       }
//     }, 0) === gameSize;

// https://mobx.js.org/defining-data-stores.html#domain-stores
class Sudoku {
  difficultyOptions: Difficulty[] = [
    'easy',
    'medium',
    'hard',
    'expert',
  ] as const;
  difficulty: Difficulty | undefined;
  selected: Cell['index'] | undefined;
  date: string | undefined;
  games: {
    [date: string]: Games;
  } = {};

  constructor() {
    makeAutoObservable(this);
  }

  get game(): Game | undefined {
    if (!this.show) return undefined;
    return this.games[this.date!][this.difficulty!];
  }

  get puzzle(): string | undefined {
    return this.game?.puzzle;
  }

  get solution(): string | undefined {
    return this.game?.solution;
  }

  get show(): boolean {
    return Boolean(this.difficulty && this.date && this.date in this.games);
  }

  get displayDate(): string | undefined {
    return this.date ? format(this.date) : undefined;
  }

  sync({ date, ...games }: Games & { date: string }) {
    this.games[date] = games;
    this.date = date;
  }

  selectDifficulty(difficulty: Difficulty | undefined) {
    this.difficulty = difficulty;
    // TODO: autoselect first empty cell
  }

  toggleSelectCell(id: number | undefined) {
    this.selected = this.selected === id ? undefined : id;
  }

  getCell(id: number) {
    // save cell instances ?

    return this.puzzle && this.solution
      ? {
          ...new Cell({
            index: id,
            value: this.puzzle[id],
            solution: this.solution[id],
          }),
          selected: this.selected === id,
        }
      : undefined;
  }
}

export const sudoku = new Sudoku();
