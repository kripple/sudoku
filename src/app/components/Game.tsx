import { useState } from 'react';

import { Cell } from '@/app/components/Cell';
import { useConfetti } from '@/app/hooks/useConfetti';
import { useKeyboard } from '@/app/hooks/useKeyboard';
import { useStateRef } from '@/app/hooks/useStateRef';
import { useStorage } from '@/app/hooks/useStorage';
import { emptyCell } from '@/constants/config';

import '@/app/components/Game.css';

export function Game() {
  const [sudoku, sudokuRef] = useStorage();
  const cells = sudoku.puzzle.split('');
  const solution = sudoku.solution.split('');

  const [input, setInput] = useState<string>(sudoku.puzzle);
  const inputs = input.split('');

  const win = sudoku.solution === input;
  useConfetti(win);

  const [selected, setSelected, selectedRef] = useStateRef<number>(
    cells.findIndex((value) => value === emptyCell),
  );
  useKeyboard({ sudokuRef, indexRef: selectedRef, setInput, setSelected });

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
