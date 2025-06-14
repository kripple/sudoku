import { Token } from '@/app/components/Token';
import { emptyCell, gameSize } from '@/constants/config';

import '@/app/components/Cell.css';

export function Cell({
  index,
  initialValue,
  currentValue,
  solution,
  selected,
  children,
  setSelectedIndex,
}: {
  index: number;
  initialValue: string;
  currentValue: string;
  solution: string;
  selected: boolean;
  children?: ReactNode;
  setSelectedIndex: SetState<number>;
}) {
  const colId = (index % gameSize) + 1;
  const rowId = Math.floor(index / gameSize) + 1;
  const miniGameSize = Math.sqrt(gameSize);

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

  const addBorder = (isBorderCell: boolean) => !selected && isBorderCell;

  const classNames = [
    'game-cell',
    `row-${rowId}`,
    `col-${colId}`,
    initiallyEmpty ? 'empty' : 'filled',
    selected ? 'selected' : false,
    incorrect,
    addBorder(outerBorderLeft) ? 'outer-border-left' : false,
    addBorder(outerBorderRight) ? 'outer-border-right' : false,
    addBorder(outerBorderTop) ? 'outer-border-top' : false,
    addBorder(outerBorderBottom) ? 'outer-border-bottom' : false,
    addBorder(innerBorderRight) ? 'inner-border-right' : false,
    addBorder(innerBorderBottom) ? 'inner-border-bottom' : false,
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
