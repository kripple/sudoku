import { Token } from '@/app/components/Token';
import {
  emptyCell,
  gameSize,
  getColId,
  getRowId,
  miniGameSize,
} from '@/utils/game';

import '@/app/components/Cell.css';

export function Cell({
  index,
  initialValue,
  currentValue,
  solution,
  selected,
  highlight,
  children,
  setSelectedIndex,
}: {
  index: number;
  initialValue: string;
  currentValue: string;
  solution: string;
  selected: boolean;
  highlight: boolean;
  children?: ReactNode;
  setSelectedIndex: SetState<number>;
}) {
  const colId = getColId(index);
  const rowId = getRowId(index);

  const initiallyEmpty = initialValue === emptyCell;
  const incorrect =
    initiallyEmpty && currentValue !== emptyCell && currentValue !== solution
      ? 'incorrect'
      : false;

  // outer borders
  const outerBorderLeft = colId === 1;
  const outerBorderRight = colId === gameSize;
  const outerBorderTop = rowId === 1;
  const outerBorderBottom = rowId === gameSize;

  // inner borders
  const innerBorderRight = colId % miniGameSize === 0;
  const innerBorderBottom = rowId % miniGameSize === 0;

  const classNames = [
    'game-cell',
    `row-${rowId}`,
    `col-${colId}`,
    initiallyEmpty ? 'empty' : 'filled',
    selected ? 'selected' : false,
    highlight ? 'highlight' : false,
    incorrect,
    outerBorderLeft ? 'outer-border-left' : false,
    outerBorderRight ? 'outer-border-right' : false,
    outerBorderTop ? 'outer-border-top' : false,
    outerBorderBottom ? 'outer-border-bottom' : false,
    innerBorderRight ? 'inner-border-right' : false,
    innerBorderBottom ? 'inner-border-bottom' : false,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={classNames}
      key={`row-${rowId}-col-${colId}`}
      onClick={() => setSelectedIndex(index)}
    >
      <Token token={currentValue}>{children}</Token>
    </div>
  );
}
