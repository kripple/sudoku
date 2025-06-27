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

  return (
    <>
      <header className="header" style={ui.header}>
        {/* <button onClick={() => setDifficulty(undefined)}>
          <ArrowBackIcon />
        </button>
        <button onClick={() => toggleAuto}>Auto</button> */}
      </header>
      <main style={ui.main}>
        <div className="game" style={ui.game}>
          game
        </div>
        <aside style={ui.aside}>aside</aside>
      </main>
      {/* {difficulty ? (
        <Game auto={auto} difficulty={difficulty} />
      ) : (
        <GameSelectionScreen setDifficulty={setDifficulty} />
      )} */}
    </>
  );
});
