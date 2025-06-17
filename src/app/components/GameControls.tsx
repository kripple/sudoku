import { IoClose as ClearIcon } from 'react-icons/io5';
import {
  MdAutoMode as AutoModeIcon,
  MdInfo as InfoIcon,
  MdAutorenew as NewGameIcon,
} from 'react-icons/md';

import { GameControl } from '@/app/components/GameControl';
import { showModalCheckboxId } from '@/app/utils/constants';

import '@/app/components/GameControls.css';

export function GameControls({
  showNewGameButton,
  startNewGame,
  enableAutoCandidatesMode,
  clearCell,
}: {
  showNewGameButton: boolean;
  startNewGame: () => void;
  enableAutoCandidatesMode: () => void;
  clearCell?: () => void;
}) {
  return (
    <div className="game-controls game-controls-distribute">
      <GameControl label="Clear Cell" onClick={clearCell}>
        <ClearIcon className="react-icon" />
      </GameControl>

      <GameControl label="How To Play">
        <label
          className="show-modal-checkbox-label"
          htmlFor={showModalCheckboxId}
        >
          <InfoIcon className="react-icon" />
        </label>
      </GameControl>

      <GameControl
        label="Automatic Candidates Mode"
        onClick={enableAutoCandidatesMode}
      >
        <AutoModeIcon className="react-icon" />
      </GameControl>

      <GameControl
        hide={!showNewGameButton}
        label="New Game"
        onClick={startNewGame}
      >
        <NewGameIcon className="react-icon" />
      </GameControl>
    </div>
  );
}
