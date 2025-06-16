import { useEffect, useState } from 'react';
import { getSudoku } from 'sudoku-gen';

import { useStateRef } from '@/app/hooks/useStateRef';
import { getFromLocalStorage, saveToLocalStorage } from '@/app/utils/window';
import {
  emptyCell,
  gameLength,
  getColId,
  getRowId,
  getSetId,
} from '@/utils/game';

// TODO: check that data is valid on get and save to local storage

type Sudoku = ReturnType<typeof getSudoku>;
type Difficulty = ReturnType<typeof getSudoku>['difficulty'];

export type Cell = {
  index: number;
  rowId: number;
  colId: number;
  setId: number;
  solution: string;
  value: string;
  locked: boolean;
};

type CellEntries = {
  [index: number]: Cell;
};

// save entries to local storage
// user input + selected cell
// auto-candidates mode
// user candidates

const findFirstEmptyCell = (entries: CellEntries) =>
  Object.values(entries).find(({ value }) => value === emptyCell);

export function useSudoku(difficulty?: Difficulty) {
  const getNewGame = () => getSudoku(difficulty || 'easy');

  const [sudoku, setSudoku] = useState<Sudoku>(getNewGame());
  const [entries, setEntries] = useState<CellEntries>();
  const [selected, setSelected] = useState<Cell>();

  const startNewGame = () => {
    const newGame = getNewGame();
    setSudoku(newGame);
  };

  useEffect(() => {
    setEntries((current) => {
      const draft = { ...current };
      for (let i = 0; i < gameLength; i++) {
        const value = sudoku.puzzle[i];
        draft[i] = {
          index: i,
          rowId: getRowId(i),
          colId: getColId(i),
          setId: getSetId(i),
          solution: sudoku.solution[i],
          value,
          locked: value !== emptyCell,
        };
      }
      setSelected(findFirstEmptyCell(draft));
      return draft;
    });
  }, [sudoku]);

  // change value of selected cell
  const setSelectedValue = (value: string) => {
    setEntries((draft) =>
      !entries || !selected
        ? draft
        : {
            ...draft,
            [selected.index]: {
              ...entries[selected.index],
              value,
            },
          },
    );
  };

  return {
    sudoku: entries ? Object.values(entries) : [],
    selected,
    setSelected,
    setSelectedValue,
    startNewGame,
  };
}
