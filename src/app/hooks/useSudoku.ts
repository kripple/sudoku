import confetti from 'canvas-confetti';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { getSudoku } from 'sudoku-gen';
import type { Difficulty } from 'sudoku-gen/dist/types/difficulty.type';
import type { Sudoku } from 'sudoku-gen/dist/types/sudoku.type';

// import { getFromLocalStorage, saveToLocalStorage } from '@/app/utils/window';
import {
  emptyCell,
  gameLength,
  getColId,
  getRowId,
  getSetId,
} from '@/utils/game';

// TODO: check that data is valid on get and save to local storage

export type Cell = {
  index: number;
  rowId: number;
  colId: number;
  setId: number;
  solution: string;
  value: string;
  locked: boolean;
  userCandidates: string;
  excludedAutoCandidates: string;
};

type CellEntries = {
  [index: number]: Cell;
};

export type ToggleHandler = ({
  index,
  value,
}: {
  index: number;
  value: string;
}) => void;

// save to local storage
// add candidates
// auto-candidates mode
// use keyboard

export function useSudoku(difficulty?: Difficulty) {
  const sudokuRef = useRef<Sudoku>(null);
  const [entries, setEntries] = useState<CellEntries>();

  const startNewGame = useCallback(() => {
    const newGame = getSudoku(difficulty || 'easy');
    sudokuRef.current = newGame;

    const draft: CellEntries = {};
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
        userCandidates: '',
        excludedAutoCandidates: '',
      };
    }
    setEntries(draft);
  }, [difficulty]);

  useEffect(() => {
    startNewGame();
  }, [startNewGame]);

  // when entries change, check to see if we've won
  useEffect(() => {
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
  }, [entries]);

  // change value of selected cell
  const toggleCellValue: ToggleHandler = useCallback(
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

  const toggleCandidate: ToggleHandler = useCallback(
    ({ index, value }: { index: number; value: string }) => {
      setEntries((draft) => {
        if (!entries) {
          console.warn('missing entries');
          return draft;
        }
        const draftCandidates = `${entries[index].userCandidates}`;
        const candidates = draftCandidates.includes(value)
          ? draftCandidates.replaceAll(value, '')
          : draftCandidates.concat(value);

        return {
          ...draft,
          [index]: {
            ...entries[index],
            userCandidates: candidates,
          },
        };
      });
    },
    [entries],
  );

  const toggleExcludeAutoCandidate: ToggleHandler = useCallback(
    ({ index, value }: { index: number; value: string }) => {
      setEntries((draft) => {
        if (!entries) {
          console.warn('missing entries');
          return draft;
        }
        const excluded = `${entries[index].excludedAutoCandidates}`;
        const toggled = excluded.includes(value)
          ? excluded.replaceAll(value, '')
          : excluded.concat(value);

        return {
          ...draft,
          [index]: {
            ...entries[index],
            excludedAutoCandidates: toggled,
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
      toggleExcludeAutoCandidate,
      startNewGame,
    }),
    [
      entries,
      toggleCellValue,
      toggleCandidate,
      toggleExcludeAutoCandidate,
      startNewGame,
    ],
  );

  return memo;
}
