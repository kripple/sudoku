import { getSudoku } from 'sudoku-gen';
import { useState } from 'react';
import { Token } from '@/app/components/Token';

import '@/app/components/Game.css';

const gameSize = 9 as const;

export function Game() {
  const [sudoku, setSudoku] = useState<ReturnType<typeof getSudoku>>(
    getSudoku('easy'),
  );
  const cells = sudoku.puzzle.split('');

  return (
    <div className="game">
      {cells.map((cell, i) => {
        const rowId = (i % gameSize) + 1;
        const columnId = Math.floor(i / gameSize) + 1;

        const isBorderCell = (id: number) => id % Math.sqrt(gameSize) === 0;
        const classNames = [
          'game-cell',
          `row-${rowId}`,
          `col-${columnId}`,
          isBorderCell(rowId) ? 'border-right' : false,
          isBorderCell(columnId) ? 'border-bottom' : false,
          cell === '-' ? 'empty' : 'filled',
        ]
          .filter(Boolean)
          .join(' ');

        return (
          <div key={`row-${rowId}-col-${columnId}`} className={classNames}>
            <Token token={cell} />
          </div>
        );
      })}
    </div>
  );
}
