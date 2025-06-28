import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { IoArrowBack as ArrowBackIcon } from 'react-icons/io5';
import type { Difficulty } from 'sudoku-gen/dist/types/difficulty.type';

import { AppLoader } from '@/app/components/AppLoader';
import { Button } from '@/app/components/Button';
import { Game } from '@/app/components/Game';
import { GameSelectionScreen } from '@/app/components/GameSelectionScreen';
import { HowToPlayModal } from '@/app/components/HowToPlayModal';
import { ModalProvider } from '@/app/components/ModalProvider';
import { ui } from '@/app/store/ui';

import '@/app/components/App.css';

export const App = observer(() => {
  const [difficulty, setDifficulty] = useState<Difficulty>();
  // const [auto, setAuto] = useState<boolean>(false);
  // const toggleAuto = (event: ReactChangeEvent) => {
  //   setAuto(event.currentTarget.checked);
  // };

  return (
    <AppLoader>
      <ModalProvider contents={<HowToPlayModal />}>
        <header className="header" style={ui.header}>
          {difficulty !== undefined ? (
            <Button onClick={() => setDifficulty(undefined)}>
              <ArrowBackIcon />
            </Button>
          ) : null}

          {/* <button onClick={() => toggleAuto}>Auto</button> */}
        </header>

        {difficulty ? (
          <Game />
        ) : (
          <GameSelectionScreen setDifficulty={setDifficulty} />
        )}
      </ModalProvider>
    </AppLoader>
  );
});
