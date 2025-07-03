import { makeAutoObservable } from 'mobx';
import type { Difficulty } from 'sudoku-gen/dist/types/difficulty.type';
import type { Sudoku as SudokuType } from 'sudoku-gen/dist/types/sudoku.type';

import { Cell, type Cells } from '@/app/store/cell';
import { formatDate as format } from '@/utils/time';

export type Games = {
  [difficulty in Difficulty]: Game;
};

// https://mobx.js.org/defining-data-stores.html#domain-stores
export class Game implements SudokuType {
  date: string;
  puzzle: string;
  solution: string;
  difficulty: Difficulty;
  cells: Cells;
  selected: number;
  static defaultSelected = -1 as const;

  constructor(game: SudokuType & { date: string; cells: Cells }) {
    makeAutoObservable(this);
    this.date = game.date;
    this.puzzle = game.puzzle;
    this.solution = game.solution;
    this.difficulty = game.difficulty;

    const cells = {} as Cells;
    let selected: number = Game.defaultSelected;
    for (let i = 0; i < 81; i++) {
      const value = game.puzzle[i];
      const solution = game.solution[i];

      // Autoselect first empty cell
      if (selected === Game.defaultSelected && value === Cell.empty) {
        selected = i;
      }
      cells[i] = new Cell({
        index: i,
        value,
        solution,
      });
    }
    this.cells = cells;
    this.selected = selected;
  }

  get displayDate(): string | undefined {
    return format(this.date);
  }

  selectCell = (id: number) => {
    this.selected = id;
  };

  getCell = (id: number): { cell: Cell; selected: boolean } | undefined => {
    const cell = this.cells[id];
    return { cell, selected: this.selected === id };
  };

  setCellValue = (value: string | undefined) => {
    if (!this.cells[this.selected]) return;
    if (this.cells[this.selected].locked) return;
    this.cells[this.selected].value = value !== undefined ? value : Cell.empty;
  };

  toggleSetCellValue = (value: string | undefined) => {
    const currentValue = this.cells?.[this.selected].value;

    if (value === undefined || value === currentValue) {
      this.setCellValue(undefined);
    } else {
      this.setCellValue(value);
    }
  };

  toggleSetCellCandidate = (value: string | undefined) => {};
}
