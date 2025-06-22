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
import { tokenKeys } from '@/utils/tokens';

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
  autoCandidates: string;
  userCandidates: string;
};

type PartialCell = Omit<Cell, 'autoCandidates'>;

type CellEntries = {
  [index: number]: Cell;
};

// save to local storage
// add candidates
// auto-candidates mode
// use keyboard

export function useSudoku(difficulty?: Difficulty) {
  const sudokuRef = useRef<Sudoku>(null);
  const [entries, setEntries] = useState<CellEntries>();

  const getAutoCandidates = useCallback(
    (cell: PartialCell, cells: PartialCell[]) => {
      const validOptions = new Set(tokenKeys as string[]);
      cells.forEach((comparisonCell) => {
        if (cell.index == comparisonCell.index) return; // skip self compare
        if (comparisonCell.solution !== comparisonCell.value) return;
        if (
          cell.rowId == comparisonCell.rowId ||
          cell.colId == comparisonCell.colId ||
          cell.setId == comparisonCell.setId
        ) {
          validOptions.delete(comparisonCell.value);
        }
      });
      return [...validOptions].join('');
    },
    [],
  );

  const startNewGame = useCallback(() => {
    const newGame = getSudoku(difficulty || 'easy');
    sudokuRef.current = newGame;

    const cells: PartialCell[] = [];
    for (let i = 0; i < gameLength; i++) {
      const value = newGame.puzzle[i];
      cells.push({
        index: i,
        rowId: getRowId(i),
        colId: getColId(i),
        setId: getSetId(i),
        solution: newGame.solution[i],
        value,
        locked: value !== emptyCell,
        userCandidates: '',
      });
    }

    const draft = cells.reduce((result, cell) => {
      result[cell.index] = {
        ...cell,
        autoCandidates: getAutoCandidates(cell, cells),
      };
      return result;
    }, {} as CellEntries);

    setEntries(draft);
  }, [difficulty, getAutoCandidates]);

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
  const toggleCellValue = useCallback(
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

  const toggleCandidate = useCallback(
    ({ index, value }: { index: number; value: string }) => {
      setEntries((draft) => {
        if (!entries) {
          console.warn('missing entries');
          return draft;
        }
        const draftCandidates = `${entries[index].userCandidates}`;
        const userCandidates = draftCandidates.includes(value)
          ? draftCandidates.replaceAll(value, '')
          : draftCandidates.concat(value);

        return {
          ...draft,
          [index]: {
            ...entries[index],
            userCandidates,
          },
        };
      });
    },
    [entries],
  );

  const memo = useMemo(
    () => ({
      sudoku: entries ? Object.values(entries) : [],
      toggleCellValue,
      toggleCandidate,
      startNewGame,
    }),
    [entries, toggleCellValue, toggleCandidate, startNewGame],
  );

  return memo;
}
