import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { IoArrowBack as ArrowBackIcon } from 'react-icons/io5';
import { MdInfo as InfoIcon } from 'react-icons/md';
import type { Difficulty } from 'sudoku-gen/dist/types/difficulty.type';

import { Game } from '@/app/components/Game';
import { GameSelectionScreen } from '@/app/components/GameSelectionScreen';
import { HowToPlayModal } from '@/app/components/HowToPlayModal';
import { useUi } from '@/app/hooks/useUi';
import { ModalProvider } from '@/app/providers/ModalProvider';

import '@/app/components/App.css';

export const App = observer(() => {
  const ui = useUi();
  const [difficulty, setDifficulty] = useState<Difficulty>();
  // const [auto, setAuto] = useState<boolean>(false);
  // const toggleAuto = (event: ReactChangeEvent) => {
  //   setAuto(event.currentTarget.checked);
  // };

  return (
    <>
      <header className="header" style={ui.header}>
        {difficulty !== undefined ? (
          <button onClick={() => setDifficulty(undefined)}>
            <ArrowBackIcon />
          </button>
        ) : null}

        {/* <button onClick={() => toggleAuto}>Auto</button> */}
      </header>
      <main style={ui.main}>
        {difficulty ? (
          // <Game auto={auto} difficulty={difficulty} />
          <>
            <div className="game" style={ui.game}>
              game
            </div>
            <aside style={ui.aside}>aside</aside>
          </>
        ) : (
          <GameSelectionScreen setDifficulty={setDifficulty} />
        )}
      </main>
    </>
  );
});
