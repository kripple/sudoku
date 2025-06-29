import { observer } from 'mobx-react-lite';

import { Token } from '@/app/components/Token';
import { sudoku } from '@/app/store/sudoku';
import { ui } from '@/app/store/ui';

export const Cell = observer(({ cellId }: { cellId: number }) => {
  const cell = sudoku.getCell(cellId);

  return (
    <div style={ui.cell}>
      <Token token={cell?.value} />
    </div>
  );
});
