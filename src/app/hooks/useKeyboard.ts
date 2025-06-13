import { type RefObject, useEffect } from 'react';

import { emptyCell, gameSize } from '@/constants/config';
import { replaceAt } from '@/utils/string-replace';

export function useKeyboard({
  sudokuRef,
  indexRef,
  setInput,
  setSelected,
}: {
  sudokuRef: RefObject<{
    puzzle: string;
    solution: string;
    difficulty: string;
  }>;
  indexRef: RefObject<number>;
  setInput: SetState<string>;
  setSelected: SetState<number>;
}) {
  const handleArrowUp = () => {
    setSelected((current) => {
      const colId = Math.floor(current / gameSize) + 1;
      return colId === 1 ? current : current - gameSize;
    });
  };

  const handleArrowDown = () => {
    setSelected((current) => {
      const colId = Math.floor(current / gameSize) + 1;
      return colId === gameSize ? current : current + gameSize;
    });
  };

  const handleArrowRight = () => {
    setSelected((current) => {
      const rowId = (current % gameSize) + 1;
      return rowId === gameSize ? current : current + 1;
    });
  };

  const handleArrowLeft = () => {
    setSelected((current) => {
      const rowId = (current % gameSize) + 1;
      return rowId === 1 ? current : current - 1;
    });
  };

  const setCellValue = (key?: string) => () => {
    const readonlyCells = sudokuRef.current.puzzle.split('');
    const isEditable = readonlyCells[indexRef.current] === emptyCell;
    const value = key === undefined ? emptyCell : key;
    setInput((draft) =>
      isEditable ? replaceAt(draft, indexRef.current, value) : draft,
    );
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const keys = {
        ArrowUp: handleArrowUp,
        ArrowDown: handleArrowDown,
        ArrowRight: handleArrowRight,
        ArrowLeft: handleArrowLeft,
        Backspace: setCellValue(),
        1: setCellValue('1'),
        2: setCellValue('2'),
        3: setCellValue('3'),
        4: setCellValue('4'),
        5: setCellValue('5'),
        6: setCellValue('6'),
        7: setCellValue('7'),
        8: setCellValue('8'),
        9: setCellValue('9'),
        // TODO: escape key clears cursor value
      };
      if (event.key in keys) keys[event.key as keyof typeof keys]();
    };
    document.body.addEventListener('keydown', handleKeyDown);
    return () => document.body.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
