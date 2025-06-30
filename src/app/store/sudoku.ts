import { makeAutoObservable } from 'mobx';
import type { Difficulty } from 'sudoku-gen/dist/types/difficulty.type';
import type { Sudoku as Game } from 'sudoku-gen/dist/types/sudoku.type';

import { Cell } from '@/app/models/cell';
import { formatDate as format } from '@/utils/time';

type Games = {
  [difficulty in Difficulty]: Game;
};

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

    // async create cell objects
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
