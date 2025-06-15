import { MdInfo as InfoIcon, MdAutorenew as NewGameIcon } from 'react-icons/md';

import { showModalCheckboxId } from '@/app/utils/constants';

import '@/app/components/GameControls.css';

export function GameControls({
  showNewGameButton,
  startNewGame,
}: {
  showNewGameButton: boolean;
  startNewGame: () => void;
}) {
  return (
    <div className="game-controls game-controls-distribute">
      <div aria-label="How To Play" className="game-control">
        <div className="game-control-icon">
          <label
            className="show-modal-checkbox-label"
            htmlFor={showModalCheckboxId}
          >
            <InfoIcon className="md-icon" />
          </label>
        </div>
      </div>
      {showNewGameButton ? (
        <div
          aria-label="New Game"
          className="game-control"
          onClick={() => startNewGame()}
        >
          <div className="game-control-icon">
            <NewGameIcon className="md-icon" />
          </div>
        </div>
      ) : null}
    </div>
  );
}
