import { observer } from 'mobx-react-lite';

import { Token } from '@/app/observers/Token';
import { sudoku } from '@/app/store/sudoku';
import { ui } from '@/app/store/ui';

import '@/app/observers/Cell.css';

export const Cell = observer(({ cellId }: { cellId: number }) => {
  const data = sudoku.getCell(cellId);
  const cell = data?.cell;

  return (
    <div className="cell" style={ui.cell}>
      <Token token={cell?.value} />
    </div>
  );
});
