import { observer } from 'mobx-react-lite';

import { Token } from '@/app/observers/Token';
import { sudoku } from '@/app/store/sudoku';
import { ui } from '@/app/store/ui';
import { getColId, getRowId } from '@/utils/game';

import '@/app/observers/GridCell.css';

export const GridCell = observer(({ cellId }: { cellId: number }) => {
  const data = sudoku.getCell(cellId);
  const cell = data?.cell;
  const value = cell?.value;
  const selected = sudoku.game?.selected === cellId;
  const incorrect =
    cell !== undefined &&
    !cell.locked &&
    !cell.empty &&
    value !== cell.solution;

  const rowId = getRowId(cellId);
  const colId = getColId(cellId);

  // outer borders
  const outerBorderLeft = colId === 1;
  const outerBorderRight = colId === 9;
  const outerBorderTop = rowId === 1;
  const outerBorderBottom = rowId === 9;

  // inner borders
  const innerBorderRight = colId % 3 === 0;
  const innerBorderBottom = rowId % 3 === 0;

  const classNames = [
    'gc',
    outerBorderLeft ? 'obl' : false,
    outerBorderRight ? 'obr' : false,
    outerBorderTop ? 'obt' : false,
    outerBorderBottom ? 'obb' : false,
    innerBorderRight ? 'ibr' : false,
    innerBorderBottom ? 'ibb' : false,
    selected ? 'active' : false,
    incorrect ? 'icr' : false,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={classNames}
      onClick={() => sudoku.selectCell(cellId)}
      style={ui.borderedCell}
    >
      <div className="cell" style={ui.cell}>
        <Token token={value} />
      </div>
    </div>
  );
});
