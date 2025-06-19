import { Game } from '@/app/components/Game';
import { HowToPlayModal } from '@/app/components/HowToPlayModal';
import { ModalProvider } from '@/app/providers/ModalProvider';

import '@/app/components/App.css';

export function App() {
  return (
    <div className="app">
      <ModalProvider contents={<HowToPlayModal />}>
        <header className="header">header</header>
        <main className="main">
          <Game />
        </main>
      </ModalProvider>
    </div>
  );
}
