import { useEffect, useState } from 'react';
import { getSudoku } from 'sudoku-gen';

import { useStateRef } from '@/app/hooks/useStateRef';
import { getFromLocalStorage, saveToLocalStorage } from '@/app/utils/window';
import { emptyCell, getColId, getRowId, getSetId } from '@/utils/game';

// TODO: check that data is valid on get and save to local storage

export function useStorage() {
  const sudokuKey = 'sudoku' as const;
  const inputKey = 'sudoku_current' as const;
  const candidatesKey = 'sudoku_candidates' as const;

  const getNewGame = () => {
    const newGame = getSudoku('easy');
    saveToLocalStorage(sudokuKey, newGame);
    return newGame;
  };

  const syncWithLocalStorage = () => {
    const savedValue = getFromLocalStorage(sudokuKey);
    return savedValue || getNewGame();
  };

  const [sudoku, setSudoku, sudokuRef] = useStateRef<Sudoku>(
    syncWithLocalStorage(),
  );

  const [input, setInput] = useState<string>(
    getFromLocalStorage(inputKey) || sudoku.puzzle,
  );

  useEffect(() => {
    saveToLocalStorage(inputKey, input);
  }, [input]);

  /**
   *
   * `candidates` is an array of strings
   *
   *  each item in `candidates` corresponds to the sudoku.puzzle/input character
   *  at the corresponding index value
   *
   *  the `candidates` item (or `candidate`) will be a string of length 0-9
   *  the presence of number in the `candidate` indicates that the candidate token
   *  checkbox should render as `defaultChecked` for the token represented by that number
   *
   */
  const getNewCandidates = (currentInput: string) =>
    currentInput.split('').map(() => '');
  const [candidates, setCandidates] = useState<string[]>(
    getFromLocalStorage(candidatesKey) || getNewCandidates(input),
  );

  useEffect(() => {
    saveToLocalStorage(candidatesKey, candidates);
  }, [candidates]);

  const inputs = input.split('');
  const findFirstEmptyCell = (currentInputs: string[]) =>
    currentInputs.findIndex((value) => value === emptyCell);
  const [selectedIndex, setSelectedIndex, selectedRef] = useStateRef<number>(
    findFirstEmptyCell(inputs),
  );

  const startNewGame = () => {
    const newGame = getNewGame();
    setSudoku(newGame);
    setInput(newGame.puzzle);
    setCandidates(getNewCandidates(newGame.puzzle));
    setSelectedIndex(findFirstEmptyCell(newGame.puzzle.split('')));
  };

  const enableAutoCandidatesMode = () => {
    // TODO: set candidates for each cell based on the tokens in their row, col, and set
    setCandidates((currentCandidates) => {
      return [...currentCandidates].map((_, i) => {
        const draft = '123456789';

        const value = input[i];
        if (value !== emptyCell) return '';

        // get values for row
        const rowId = getRowId(i);

        // get values for column
        const colId = getColId(i);

        // get values for set
        const rowSetId = getSetId(rowId);
        const colSetId = getSetId(colId);

        const exclude = inputs.reduce((cellValues, cell, cellIndex) => {
          if (cell === emptyCell) return cellValues;

          const cellRowId = getRowId(cellIndex);
          if (rowId === cellRowId) {
            return cellValues.concat(cell);
          }

          const cellColId = getColId(cellIndex);
          if (colId === cellColId) {
            return cellValues.concat(cell);
          }

          const cellRowSetId = getSetId(cellRowId);
          const cellColSetId = getSetId(cellColId);
          if (rowSetId === cellRowSetId && colSetId === cellColSetId) {
            return cellValues.concat(cell);
          }

          return cellValues;
        }, '');

        exclude.split('').forEach((value) => {
          draft.replaceAll(value, '');
        });

        return draft
          .split('')
          .filter((value) => !exclude.includes(value))
          .join('');
      });
    });
    setInput((current) => `${current}`);
  };

  return {
    sudoku,
    sudokuRef,
    input,
    setInput,
    candidates,
    setCandidates,
    startNewGame,
    inputs,
    selectedIndex,
    setSelectedIndex,
    selectedRef,
    enableAutoCandidatesMode,
  };
}
