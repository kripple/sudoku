import { makeAutoObservable } from 'mobx';
import type { Difficulty } from 'sudoku-gen/dist/types/difficulty.type';
import type { Sudoku as Game } from 'sudoku-gen/dist/types/sudoku.type';

import { Cell } from '@/app/store/cell';
import { formatDate as format } from '@/utils/time';

type Cells = {
  [id: number]: Cell;
};

type Games = {
  [difficulty in Difficulty]: Game & {
    cells: Cells;
    selected: number;
  };
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
  date: string | undefined;
  games: {
    [date: string]: Games;
  } = {};
  private defaultSelected = -1;

  constructor() {
    makeAutoObservable(this);
  }

  get game(): Games[Difficulty] | undefined {
    if (!this.show) return undefined;
    return this.games[this.date!][this.difficulty!];
  }

  get selected(): number {
    const selected = this.game?.selected;
    return selected === undefined ? this.defaultSelected : selected;
  }
  set selected(value: number) {
    if (!this.game) return;
    this.game.selected = value;
  }

  get cells(): Cells | undefined {
    return this.game?.cells;
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

  sync({
    date,
    ...games
  }: {
    [difficulty in Difficulty]: Game;
  } & { date: string }) {
    this.date = date;
    let difficulty: Difficulty;
    const draft = {} as Games;

    for (difficulty in games) {
      const game = games[difficulty];
      const cells = {} as Cells;
      let selected = this.defaultSelected;

      for (let i = 0; i < 81; i++) {
        const value = game.puzzle[i];
        const solution = game.solution[i];

        // Autoselect first empty cell
        if (selected === this.defaultSelected && value === Cell.empty) {
          selected = i;
        }
        cells[i] = new Cell({
          index: i,
          value,
          solution,
        });
      }
      draft[difficulty] = { ...game, cells, selected };
    }
    this.games[date] = draft;
  }

  selectDifficulty(difficulty: Difficulty | undefined) {
    this.difficulty = difficulty;
  }

  selectCell(id: number) {
    this.selected = id;
  }

  getCell(id: number): { cell: Cell; selected: boolean } | undefined {
    const cell = this.cells?.[id];
    if (!this.game || !cell) return undefined;
    return { cell, selected: this.selected === id };
  }

  setCellValue(value: string | undefined) {
    if (!this.cells?.[this.selected]) return;
    if (this.cells[this.selected].locked) return;
    this.cells[this.selected].value = value !== undefined ? value : Cell.empty;
  }

  toggleSetCellValue(value: string | undefined) {
    const currentValue = this.cells?.[this.selected].value;

    if (value === undefined || value === currentValue) {
      this.setCellValue(undefined);
    } else {
      this.setCellValue(value);
    }
  }

  toggleSetCellCandidate() {}
}

export const sudoku = new Sudoku();
