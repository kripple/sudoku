import { useEffect, useState } from 'react';
import { getSudoku } from 'sudoku-gen';

import { useStateRef } from '@/app/hooks/useStateRef';
import { getFromLocalStorage, saveToLocalStorage } from '@/app/utils/window';

// TODO: check that data is valid on get and save to local storage

export function useStorage() {
  const sudokuKey = 'sudoku' as const;
  const inputKey = 'sudoku_current' as const;

  const syncWithLocalStorage = () => {
    const savedValue = getFromLocalStorage(sudokuKey);
    if (savedValue) {
      return savedValue;
    } else {
      const newGame = getSudoku('easy');
      saveToLocalStorage(sudokuKey, newGame);
      return newGame;
    }
  };

  const [sudoku, _setSudoku, sudokuRef] = useStateRef<Sudoku>(
    syncWithLocalStorage(),
  );

  const [input, setInput] = useState<string>(
    getFromLocalStorage(inputKey) || sudoku.puzzle,
  );

  useEffect(() => {
    saveToLocalStorage(inputKey, input);
  }, [input]);

  // TODO: add newGame function

  return [sudoku, sudokuRef, input, setInput] as const;
}
