import { compressToUTF16, decompressFromUTF16 } from 'lz-string';
import { getSudoku } from 'sudoku-gen';

import { useStateRef } from '@/app/hooks/useStateRef';

export function useStorage() {
  const key = 'sudoku' as const;
  const [data, _setData, dataRef] = useStateRef<{
    puzzle: string;
    solution: string;
    input: string;
    difficulty: string;
  }>(
    (() => {
      const savedValue = window.localStorage.getItem(key);
      if (savedValue) {
        return JSON.parse(decompressFromUTF16(savedValue));
      } else {
        const sudoku = getSudoku('easy');
        const { puzzle, solution, difficulty } = sudoku;
        const draft = {
          puzzle,
          solution,
          input: puzzle,
          difficulty,
        };
        window.localStorage.setItem(
          key,
          compressToUTF16(JSON.stringify(draft)),
        );
        return draft;
      }
    })(),
  );

  // TODO: and newGame function

  return [data, dataRef] as const;
}
