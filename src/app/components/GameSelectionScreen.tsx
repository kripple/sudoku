import type { Difficulty } from 'sudoku-gen/dist/types/difficulty.type';

import { Button } from '@/app/components/Button';
import { ui } from '@/app/store/ui';

import '@/app/components/GameSelectionScreen.css';

export function GameSelectionScreen({
  setDifficulty,
}: {
  setDifficulty: SetState<Difficulty | undefined>;
}) {
  const difficulties: {
    [key in Difficulty]: true;
  } = {
    easy: true,
    medium: true,
    hard: true,
    expert: true,
  };
  const list = Object.keys(difficulties) as Difficulty[];

  return (
    <main className="game-selection-screen" style={{ minHeight: ui.main.height }}>
      <section className="section">
        <div className="logo"></div>
        <div className="heading">Sudoku</div>
        <div className="tagline">Tagline goes here.</div>
        <div className="text">Choose Your Puzzle:</div>
        <div className="button-set">
          {list.map((difficulty) => (
            <Button
              key={difficulty}
              onClick={() => setDifficulty(difficulty)}
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
