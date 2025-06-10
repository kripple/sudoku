import { Game } from '@/app/components/Game';
import { CursorProvider } from '@/app/providers/CursorProvider';

import '@/app/components/App.css';

export function App() {
  return (
    <CursorProvider>
      <main className="main">
        <Game />
      </main>
    </CursorProvider>
  );
}
