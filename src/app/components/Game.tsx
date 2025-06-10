import { useState } from 'react';
import { getSudoku } from 'sudoku-gen';

import { Cell } from '@/app/components/Cell';
import { emptyCell } from '@/constants/config';

import '@/app/components/Game.css';

export function Game() {
  const [sudoku] = useState<ReturnType<typeof getSudoku>>(getSudoku('easy'));
  const cells = sudoku.puzzle.split('');
  const solution = sudoku.solution.split('');

  const [input, setInput] = useState<string>(sudoku.puzzle);
  const inputs = input.split('');

  const [selected, setSelected] = useState<number>(
    cells.findIndex((value) => value === emptyCell),
  );

  return (
    <div className="game">
      {inputs.map((input, i) => {
        return (
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
        );
      })}
    </div>
  );
}
