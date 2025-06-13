import { useEffect } from 'react';

import { Game } from '@/app/components/Game';

import '@/app/components/App.css';

export function App() {
  useEffect(() => {
    const now = new Date();
    const hours = now.getHours();
    const dark = hours < 8 || hours > 20;
    document.documentElement.style.filter = dark
      ? 'brightness(0.7)'
      : 'brightness(0.8)';
  }, []);

  return (
    <main className="main">
      <Game />
    </main>
  );
}
