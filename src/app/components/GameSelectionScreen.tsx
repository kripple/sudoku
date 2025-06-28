import { observer } from 'mobx-react-lite';

import { Button } from '@/app/components/Button';
import { useSudoku } from '@/app/hooks/useSudoku';
import { sudoku } from '@/app/store/sudoku';
import { ui } from '@/app/store/ui';

import '@/app/components/GameSelectionScreen.css';

export const GameSelectionScreen = observer(() => {
  const { data } = useSudoku();

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
              disabled={!data}
              key={difficulty}
              onClick={() => {
                if (!data) {
                  console.warn('missing data');
                  return;
                }
                sudoku.selectDifficulty(data[difficulty]);
              }}
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
});
