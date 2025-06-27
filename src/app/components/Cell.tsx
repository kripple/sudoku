import { store } from '@/app/store/store';
import { ui } from '@/app/store/ui';
import { getColId, getRowId } from '@/utils/game';

import '@/app/components/Cell.css';

export function Cell({ cellId }: { cellId: number }) {
  const rowId = getRowId(cellId);
  const colId = getColId(cellId);

  // outer borders
  const outerBorderLeft = colId === 1;
  const outerBorderRight = colId === store.cellsPerSet;
  const outerBorderTop = rowId === 1;
  const outerBorderBottom = rowId === store.cellsPerSet;

  // inner borders
  const innerBorderRight = colId % store.setSize === 0;
  const innerBorderBottom = rowId % store.setSize === 0;

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
      <div style={ui.cell}></div>
    </div>
  );
}
