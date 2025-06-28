import { Button } from '@/app/components/Button';
import { sudoku } from '@/app/store/sudoku';
import { ui } from '@/app/store/ui';

import '@/app/components/GameSelectionScreen.css';

export function GameSelectionScreen() {
  return (
    <main
      className="game-selection-screen"
      style={{ minHeight: ui.main.height }}
    >
      <section className="section">
        <div className="logo"></div>
        <div className="heading">Sudoku</div>
        <div className="tagline">Tagline goes here.</div>
        <div className="text">Choose Your Puzzle:</div>
        <div className="button-set">
          {sudoku.difficultyOptions.map((difficulty) => (
            <Button
              key={difficulty}
              onClick={() => sudoku.setDifficulty(difficulty)}
              variant="difficulty"
            >
              {difficulty}
            </Button>
          ))}
        </div>
        <div className="text">June 27, 2025</div>
      </section>
    </main>
  );
}
