import { observer } from 'mobx-react-lite';

import { Cell } from '@/app/components/Cell';
import { sudoku } from '@/app/store/sudoku';
import { ui } from '@/app/store/ui';
import { getColId, getRowId } from '@/utils/game';

import '@/app/components/GridCell.css';

export const GridCell = observer(({ cellId }: { cellId: number }) => {
  const rowId = getRowId(cellId);
  const colId = getColId(cellId);

  // outer borders
  const outerBorderLeft = colId === 1;
  const outerBorderRight = colId === sudoku.cellsPerSet;
  const outerBorderTop = rowId === 1;
  const outerBorderBottom = rowId === sudoku.cellsPerSet;

  // inner borders
  const innerBorderRight = colId % sudoku.setSize === 0;
  const innerBorderBottom = rowId % sudoku.setSize === 0;

  const classNames = [
    'cell',
    outerBorderLeft ? 'obl' : false,
    outerBorderRight ? 'obr' : false,
    outerBorderTop ? 'obt' : false,
    outerBorderBottom ? 'obb' : false,
    innerBorderRight ? 'ibr' : false,
    innerBorderBottom ? 'ibb' : false,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames} style={ui.borderedCell}>
      <Cell cellId={cellId}></Cell>
    </div>
  );
});
