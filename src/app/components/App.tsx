import { Game } from '@/app/components/Game';
import { HowToPlayModal } from '@/app/components/HowToPlayModal';
import { ModalProvider } from '@/app/providers/ModalProvider';

import '@/app/components/App.css';

export function App() {
  return (
    <ModalProvider contents={<HowToPlayModal />}>
      <header className="header"></header>
      <main className="main">
        <Game />
      </main>
    </ModalProvider>
  );
}
