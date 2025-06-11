import { useEffect, useState } from 'react';
import { getSudoku } from 'sudoku-gen';

import { Cell } from '@/app/components/Cell';
import { useStateRef } from '@/app/hooks/useStateRef';
import { emptyCell, gameSize } from '@/constants/config';
import { replaceAt } from '@/utils/string-replace';

import '@/app/components/Game.css';

export function Game() {
  const [sudoku, _setSudoku, sudokuRef] = useStateRef<
    ReturnType<typeof getSudoku>
  >(getSudoku('easy'));
  const cells = sudoku.puzzle.split('');
  const solution = sudoku.solution.split('');

  const [input, setInput] = useState<string>(sudoku.puzzle);
  const inputs = input.split('');

  const [selected, setSelected, selectedRef] = useStateRef<number>(
    cells.findIndex((value) => value === emptyCell),
  );

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

  const handleBackspace = () => {
    const readonlyCells = sudokuRef.current.puzzle.split('');
    const isEditable = readonlyCells[selectedRef.current] === emptyCell;
    setInput((draft) =>
      isEditable ? replaceAt(draft, selectedRef.current, emptyCell) : draft,
    );
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const keys = {
        ArrowUp: handleArrowUp,
        ArrowDown: handleArrowDown,
        ArrowRight: handleArrowRight,
        ArrowLeft: handleArrowLeft,
        Backspace: handleBackspace,
      };
      if (event.key in keys) keys[event.key as keyof typeof keys]();
    };
    document.body.addEventListener('keydown', handleKeyDown);
    return () => document.body.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="game">
      {inputs.map((input, i) => (
        <Cell
          currentValue={input}
          index={i}
          initialValue={cells[i]}
          key={i}
          selected={i === selected}
          setInput={setInput}
          setSelected={setSelected}
          solution={solution[i]}
        />
      ))}
    </div>
  );
}
