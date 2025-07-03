import { action, makeAutoObservable } from 'mobx';
import type { Difficulty } from 'sudoku-gen/dist/types/difficulty.type';
// import type { Sudoku as SudokuType } from 'sudoku-gen/dist/types/sudoku.type';

import { Cell, type Cells } from '@/app/store/cell';
import { Game, type Games } from '@/app/store/game';

//   const disabled =
//     sudoku.reduce((count, cell) => {
//       if (cell.value === key && cell.value === cell.solution) {
//         return count + 1;
//       } else {
//         return count;
//       }
//     }, 0) === gameSize;

// https://mobx.js.org/defining-data-stores.html#domain-stores
export class Sudoku implements Partial<Games> {
  difficulty: Difficulty | undefined;
  easy: Game | undefined;
  medium: Game | undefined;
  hard: Game | undefined;
  expert: Game | undefined;

  constructor() {
    makeAutoObservable(this);
  }

  get show(): boolean {
    return this.difficulty !== undefined && this[this.difficulty] !== undefined;
  }

  get game(): Game | undefined {
    if (!this.show) return undefined;
    return this[this.difficulty!];
  }

  get selected(): number {
    const selected = this.game?.selected;
    return selected === undefined ? Game.defaultSelected : selected;
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

  get displayDate(): string | undefined {
    return this.game?.displayDate;
  }

  selectDifficulty = (difficulty: Difficulty | undefined) => {
    this.difficulty = difficulty;
  };

  sync = ({ date, ...games }: Games & { date: string }) => {
    let difficulty: Difficulty;
    for (difficulty in games) {
      this[difficulty] = new Game(games[difficulty]);
    }
  };

  selectCell = (id: number) => {
    this.game?.selectCell(id);
  };

  getCell = (id: number): { cell: Cell; selected: boolean } | undefined => {
    return this.game?.getCell(id);
  };

  setCellValue = (value: string | undefined) => {
    this.game?.setCellValue(value);
  };

  toggleSetCellValue = (value: string | undefined) => {
    this.game?.toggleSetCellValue(value);
  };

  toggleSetCellCandidate = (value: string | undefined) => {
    this.game?.toggleSetCellCandidate(value);
  };

  handleKeyDown = action((event: KeyboardEvent) => {
    event.preventDefault(); // don't use arrow keys to scroll screen

    const current = this.selected;
    const select = this.selectCell;
    const setCellValue = this.setCellValue;
    const toggleSetCellValue = this.toggleSetCellValue;

    const ArrowUp = () => {
      const colId = Math.floor(current / 9) + 1;
      const cellId = colId === 1 ? current : current - 9;
      select(cellId);
    };

    const ArrowDown = () => {
      const colId = Math.floor(current / 9) + 1;
      const cellId = colId === 9 ? current : current + 9;
      select(cellId);
    };

    const ArrowLeft = () => {
      const rowId = (current % 9) + 1;
      const cellId = rowId === 1 ? current : current - 1;
      select(cellId);
    };

    const ArrowRight = () => {
      const rowId = (current % 9) + 1;
      const cellId = rowId === 9 ? current : current + 1;
      select(cellId);
    };

    const Backspace = () => setCellValue(undefined);
    const numberKey = () => toggleSetCellValue(event.key);

    const keys = {
      ArrowUp,
      ArrowDown,
      ArrowRight,
      ArrowLeft,
      Backspace,
      1: numberKey,
      2: numberKey,
      3: numberKey,
      4: numberKey,
      5: numberKey,
      6: numberKey,
      7: numberKey,
      8: numberKey,
      9: numberKey,
    } as const;

    if (event.key in keys) {
      keys[event.key as keyof typeof keys]();
    }
  });
}

export const sudoku = new Sudoku();
