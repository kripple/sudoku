import { Token } from '@/app/components/Token';
import { useCursor } from '@/app/providers/CursorProvider';
import { emptyCell, gameSize } from '@/constants/config';
import { replaceAt } from '@/utils/string-replace';

import '@/app/components/Cell.css';

export function Cell({
  index,
  initialValue,
  currentValue,
  solution,
  setInput,
}: {
  index: number;
  initialValue: string;
  currentValue: string;
  solution: string;
  setInput: SetState<string>;
}) {
  const cursor = useCursor();
  const rowId = (index % gameSize) + 1;
  const colId = Math.floor(index / gameSize) + 1;

  const isBorderCell = (id: number) => id % Math.sqrt(gameSize) === 0;
  const classNames = [
    'game-cell',
    `row-${rowId}`,
    `col-${colId}`,
    isBorderCell(rowId) ? 'border-right' : false,
    isBorderCell(colId) ? 'border-bottom' : false,
    initialValue === emptyCell ? 'empty' : 'filled',
    currentValue === emptyCell ? 'unfilled' : false,
    initialValue === emptyCell &&
    currentValue !== emptyCell &&
    currentValue !== solution
      ? 'incorrect'
      : false,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={classNames}
      key={`row-${rowId}-col-${colId}`}
      onClick={
        initialValue === emptyCell
          ? () => {
              setInput((draft) =>
                cursor ? replaceAt(draft, index, cursor) : draft,
              );
            }
          : undefined
      }
    >
      <Token token={currentValue} />
    </div>
  );
}
