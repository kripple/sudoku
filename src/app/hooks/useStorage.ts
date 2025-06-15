import { useEffect, useState } from 'react';
import { getSudoku } from 'sudoku-gen';

import { useStateRef } from '@/app/hooks/useStateRef';
import { getFromLocalStorage, saveToLocalStorage } from '@/app/utils/window';

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

  const startNewGame = () => {
    const newGame = getNewGame();
    setSudoku(newGame);
    setInput(newGame.puzzle);
    setCandidates(getNewCandidates(newGame.puzzle));
  };

  return [
    sudoku,
    sudokuRef,
    input,
    setInput,
    candidates,
    setCandidates,
    startNewGame,
  ] as const;
}
