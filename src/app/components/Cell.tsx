import { sudoku } from '@/app/store/sudoku';
import { ui } from '@/app/store/ui';

export function Cell({ cellId }: { cellId: number }) {
  const cell = sudoku.getCell(cellId);

  return <div style={ui.cell}>{cell.value}</div>;
}
