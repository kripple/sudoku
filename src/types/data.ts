import type { Difficulty } from 'sudoku-gen/dist/types/difficulty.type';

export type Solutions = {
  [key in Difficulty]: Sudoku;
};

export type Data = Solutions & { date: string };

export type DTO = {
  value: string;
  date: string;
};

export type Metadata = { date: string; ttl: number };
