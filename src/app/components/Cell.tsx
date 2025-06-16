import { Token } from '@/app/components/Token';
import type { Cell as CellType } from '@/app/hooks/useSudoku';
import { emptyCell, gameSize, miniGameSize } from '@/utils/game';

import '@/app/components/Cell.css';

export function Cell({
  sameValue,
  highlight,
  selected,
  children,
  setSelected,
  ...cell
}: CellType & {
  sameValue: boolean;
  highlight: boolean;
  selected: boolean;
  children?: ReactNode;
  setSelected: SetState<CellType | undefined>;
}) {
  const { rowId, colId, solution, value, locked } = cell;
  const empty = value === emptyCell;
  const incorrect =
    !locked && !empty && value !== solution ? 'incorrect' : false;

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
    locked ? 'locked' : false,
    empty ? 'empty' : false,
    selected ? 'selected' : false,
    highlight ? 'highlight' : false,
    value !== emptyCell && sameValue ? 'same-value' : false,
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
      onClick={() => setSelected(cell)}
    >
      <Token token={value}>{children}</Token>
    </div>
  );
}
