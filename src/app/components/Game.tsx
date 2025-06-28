import { GridCell } from '@/app/components/GridCell';
import { sudoku } from '@/app/store/sudoku';
import { ui } from '@/app/store/ui';

import '@/app/components/Game.css';

export function Game() {
  return (
    <main style={ui.main}>
      <div className="game" style={ui.game}>
        {Array.from({ length: sudoku.cellCount }).map((_, i) => (
          <GridCell cellId={i} key={i} />
        ))}
      </div>
      <aside className="aside" style={ui.aside}></aside>
    </main>
  );
}
