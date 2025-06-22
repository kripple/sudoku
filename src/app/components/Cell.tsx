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
  const incorrect = !locked && !empty && value !== solution ? 'icr' : false;

  // outer borders
  const outerBorderLeft = colId === 1;
  const outerBorderRight = colId === gameSize;
  const outerBorderTop = rowId === 1;
  const outerBorderBottom = rowId === gameSize;

  // inner borders
  const innerBorderRight = colId % miniGameSize === 0;
  const innerBorderBottom = rowId % miniGameSize === 0;

  const shared = [
    locked ? 'lk' : false,
    empty ? 'et' : false,
    selected ? 'sl' : false,
    highlight ? 'hl' : false,
    value !== emptyCell && sameValue ? 'sv' : false,
    incorrect,
  ];

  const gameCellBorderClasses = [
    'gcb',
    outerBorderLeft ? 'obl' : false,
    outerBorderRight ? 'obr' : false,
    outerBorderTop ? 'obt' : false,
    outerBorderBottom ? 'obb' : false,
    innerBorderRight ? 'ibr' : false,
    innerBorderBottom ? 'ibb' : false,
    ...shared,
  ]
    .filter(Boolean)
    .join(' ');

  const gameCellClasses = ['gc', ...shared].filter(Boolean).join(' ');

  return (
    <div
      className={gameCellBorderClasses}
      key={`row-${rowId}-col-${colId}`}
      onClick={() => setSelected(cell)}
    >
      <div className={gameCellClasses}>
        <Token token={value}>{children}</Token>
      </div>
    </div>
  );
}
