import { getSudoku } from 'sudoku-gen';

import '@/app/components/Game.css';

const gameSize = 9 as const;
const gameRows = new Array(gameSize)
  .fill(0)
  .map(() => new Array(gameSize).fill('-'));

export function Game() {
  return (
    <div className="game">
      {gameRows.map((columns, x) =>
        columns.map((_column, y) => {
          const rowId = x + 1;
          const columnId = y + 1;

          const specialCell = Math.sqrt(gameSize);
          const rowBorder = rowId % specialCell === 0 ? 'border-bottom' : false;
          const columnBorder =
            columnId % specialCell === 0 ? 'border-right' : false;

          const classNames = [
            'game-cell',
            `row-${rowId}`,
            `col-${columnId}`,
            rowBorder,
            columnBorder,
          ]
            .filter(Boolean)
            .join(' ');

          return (
            <div key={`row-${rowId}-col-${columnId}`} className={classNames}>
              {/* ({rowId}, {columnId}) */}
            </div>
          );
        }),
      )}
    </div>
  );
}
