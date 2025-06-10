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

          const isBorderCell = (id: number) => id % Math.sqrt(gameSize) === 0;
          const rowBorder = isBorderCell(rowId) ? 'border-bottom' : false;
          const columnBorder = isBorderCell(columnId) ? 'border-right' : false;

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
