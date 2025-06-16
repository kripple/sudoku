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
}: {
  showNewGameButton: boolean;
  startNewGame: () => void;
  enableAutoCandidatesMode: () => void;
}) {
  return (
    <div className="game-controls game-controls-distribute">
      <GameControl label="How To Play">
        <label
          className="show-modal-checkbox-label"
          htmlFor={showModalCheckboxId}
        >
          <InfoIcon className="md-icon" />
        </label>
      </GameControl>

      <GameControl
        label="Automatic Candidates Mode"
        onClick={enableAutoCandidatesMode}
      >
        <AutoModeIcon className="md-icon" />
      </GameControl>

      <GameControl
        hide={!showNewGameButton}
        label="New Game"
        onClick={startNewGame}
      >
        <NewGameIcon className="md-icon" />
      </GameControl>
    </div>
  );
}
