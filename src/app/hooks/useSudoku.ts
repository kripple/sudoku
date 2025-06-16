import confetti from 'canvas-confetti';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { getSudoku } from 'sudoku-gen';

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

// save to local storage
// add candidates
// auto-candidates mode
// use keyboard
// add lowlights

export function useSudoku(difficulty?: Difficulty) {
  const sudokuRef = useRef<Sudoku>(null);
  const [entries, setEntries] = useState<CellEntries>();

  const startNewGame = useCallback(() => {
    const newGame = getSudoku(difficulty || 'easy');
    sudokuRef.current = newGame;

    setEntries((current) => {
      const draft = { ...current };
      for (let i = 0; i < gameLength; i++) {
        const value = newGame.puzzle[i];
        draft[i] = {
          index: i,
          rowId: getRowId(i),
          colId: getColId(i),
          setId: getSetId(i),
          solution: newGame.solution[i],
          value,
          locked: value !== emptyCell,
        };
      }

      return draft;
    });
  }, [difficulty]);

  useEffect(() => {
    startNewGame();
  }, [startNewGame]);

  // when entries change, check to see if we've won
  useEffect(() => {
    setTimeout(() => {
      if (!entries) return;
      const win = Object.values(entries).every(
        (cell) => cell.value === cell.solution,
      );
      if (!win) return;
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }, 0);
  }, [entries]);

  // change value of selected cell
  const setCellValue = useCallback(
    ({ index, value }: { index: number; value: string }) => {
      setEntries((draft) => {
        if (!entries) {
          console.warn('missing entries');
          return draft;
        }
        const currentValue = entries[index].value;
        return {
          ...draft,
          [index]: {
            ...entries[index],
            value: value === currentValue ? emptyCell : value,
          },
        };
      });
    },
    [entries],
  );

  const memo = useMemo(
    () => ({
      sudoku: entries ? Object.values(entries) : [],
      setCellValue,
      startNewGame,
    }),
    [entries, setCellValue, startNewGame],
  );

  return memo;
}
