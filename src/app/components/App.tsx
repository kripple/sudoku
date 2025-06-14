import { Game } from '@/app/components/Game';
import { HowToPlayModal } from '@/app/components/HowToPlayModal';
import { ModalProvider } from '@/app/providers/ModalProvider';

import '@/app/components/App.css';

export function App() {
  const showModalCheckboxId = 'modal-show' as const;
  const hideModalCheckboxId = 'modal-hide' as const;

  return (
    <ModalProvider
      contents={<HowToPlayModal />}
      hideModalCheckboxId={hideModalCheckboxId}
      showModalCheckboxId={showModalCheckboxId}
    >
      <header className="header">
        <label
          className="show-modal-checkbox-label"
          htmlFor={showModalCheckboxId}
        >
          SHOW
        </label>
        <label
          className="hide-modal-checkbox-label"
          htmlFor={hideModalCheckboxId}
        >
          HIDE
        </label>
      </header>
      <main className="main">
        <Game />
      </main>
    </ModalProvider>
  );
}
