import { useEffect, useState } from 'react';
import { getSudoku } from 'sudoku-gen';

import { useStateRef } from '@/app/hooks/useStateRef';
import { getFromLocalStorage, saveToLocalStorage } from '@/app/utils/window';
import { emptyCell, getColId, getRowId, getSetId } from '@/utils/game';

// TODO: check that data is valid on get and save to local storage

type Sudoku = ReturnType<typeof getSudoku>;
type Difficulty = ReturnType<typeof getSudoku>['difficulty'];

type Cell = {
  index: number;
  rowId: number;
  colId: number;
  setId: number;
  solution: string;
  initialValue: string;
  value: string;
};

type CellEntries = {
  [index: number]: Cell;
};

// represent game as entries. display to screen and save to local storage
// new game function
// user input + selected cell
// auto-candidates mode
// user candidates

export function useSudoku(difficulty?: Difficulty) {
  const getNewGame = () => getSudoku(difficulty || 'easy');

  const [sudoku, setSudoku] = useState<Sudoku>(getNewGame());
  const [entries, setEntries] = useState<CellEntries>({});

  const startNewGame = () => {
    const newGame = getNewGame();
    setSudoku(newGame);
  };

  // type Cell = {
  //   index: number;
  //   rowId: number;
  //   colId: number;
  //   setId: number;
  //   solution: string;
  //   initialValue: string;
  //   value: string;
  // };

  useEffect(() => {
    const gameLength = 81 as const;
    const sudokuEntries: CellEntries = {};
    for (let i = 0; i < gameLength; i++) {
      const value = sudoku.puzzle[i];
      sudokuEntries[i] = {
        index: i,
        rowId: getRowId(i),
        colId: getColId(i),
        setId: getSetId(i),
        solution: sudoku.solution[i],
        initialValue: value,
        value,
      };
    }
    setEntries(sudokuEntries);
  }, [sudoku]);

  return {
    sudoku: Object.values(entries),
    startNewGame,
  };
}
