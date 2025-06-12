import { compressToUTF16, decompressFromUTF16 } from 'lz-string';
import { useEffect, useState } from 'react';
import { getSudoku } from 'sudoku-gen';

import { useStateRef } from '@/app/hooks/useStateRef';

export function useStorage() {
  const sudokuKey = 'sudoku' as const;
  const inputKey = 'sudoku_current' as const;
  type Key = typeof sudokuKey | typeof inputKey;
  type Value = Parameters<typeof JSON.stringify>['0'];

  const getFromLocalStorage = (key: Key) => {
    const savedValue = window.localStorage.getItem(key);
    return savedValue
      ? JSON.parse(decompressFromUTF16(savedValue))
      : savedValue;
  };

  const saveToLocalStorage = (key: Key, value: Value) => {
    window.localStorage.setItem(key, compressToUTF16(JSON.stringify(value)));
  };

  const [sudoku, _setSudoku, sudokuRef] = useStateRef<Sudoku>(
    getFromLocalStorage(sudokuKey) || getSudoku('easy'),
  );

  const [input, setInput] = useState<string>(
    getFromLocalStorage(inputKey) || sudoku.puzzle,
  );

  useEffect(() => {
    saveToLocalStorage(sudokuKey, sudoku);
  }, [sudoku]);

  useEffect(() => {
    saveToLocalStorage(inputKey, input);
  }, [input]);

  // TODO: add newGame function

  return [sudoku, sudokuRef, input, setInput] as const;
}
