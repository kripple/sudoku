import { Cell } from '@/app/components/Cell';
import { store } from '@/app/store/store';
import { ui } from '@/app/store/ui';

import '@/app/components/Game.css';

export function Game() {
  return (
    <main style={ui.main}>
      <div className="game" style={ui.game}>
        {Array.from({ length: store.cellCount }).map((_, i) => (
          <Cell cellId={i} key={i} />
        ))}
      </div>
      <aside className="aside" style={ui.aside}></aside>
    </main>
  );
}
