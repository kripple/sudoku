import { useEffect } from 'react';

import { CursorSelect } from '@/app/components/CursorSelect';
import { Game } from '@/app/components/Game';
import { CursorProvider } from '@/app/providers/CursorProvider';

import '@/app/components/App.css';

export function App() {
  useEffect(() => {
    const now = new Date();
    const hours = now.getHours();
    const dark = hours < 8 || hours > 20;
    document.documentElement.style.filter = dark ? 'brightness(0.7)' : 'none';
  }, []);

  return (
    <CursorProvider>
      <main className="main">
        <Game />
        <CursorSelect />
      </main>
    </CursorProvider>
  );
}
