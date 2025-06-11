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
  selected,
  setInput,
  setSelected,
}: {
  index: number;
  initialValue: string;
  currentValue: string;
  solution: string;
  selected: boolean;
  setInput: SetState<string>;
  setSelected: SetState<number>;
}) {
  const cursor = useCursor();
  const rowId = (index % gameSize) + 1;
  const colId = Math.floor(index / gameSize) + 1;

  const isBorderCell = (id: number) => id % Math.sqrt(gameSize) === 0;
  const initiallyEmpty = initialValue === emptyCell;
  const incorrect =
    initiallyEmpty && currentValue !== emptyCell && currentValue !== solution
      ? 'incorrect'
      : false;
  const highlight = selected ? 'highlight' : false;

  const classNames = [
    'game-cell',
    `row-${rowId}`,
    `col-${colId}`,
    isBorderCell(rowId) ? 'border-right' : false,
    isBorderCell(colId) ? 'border-bottom' : false,
    initiallyEmpty ? 'empty' : 'filled',
    incorrect,
    highlight,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={classNames}
      key={`row-${rowId}-col-${colId}`}
      onClick={() => {
        cursor
          ? initiallyEmpty &&
            setInput((draft) =>
              currentValue === emptyCell
                ? replaceAt(draft, index, cursor)
                : replaceAt(draft, index, emptyCell),
            )
          : setSelected(index);
      }}
    >
      <Token token={currentValue} />
    </div>
  );
}
