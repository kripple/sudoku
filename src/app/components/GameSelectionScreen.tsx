import { observer } from 'mobx-react-lite';

import { BackgroundColor } from '@/app/components/BackgroundColor';
import { Button } from '@/app/components/Button';
import { useSudoku } from '@/app/hooks/useSudoku';
import { sudoku } from '@/app/store/sudoku';
import { ui } from '@/app/store/ui';

import '@/app/components/GameSelectionScreen.css';

export const GameSelectionScreen = observer(() => {
  const {
    data,
    meta: { date },
  } = useSudoku();
  const style = { fill: '#fff', stroke: '#000', strokeWidth: 2 };
  const accentColor = 'var(--accent-color)' as const;

  return sudoku.show ? null : (
    <main className="game-selection-screen" style={{ minHeight: ui.height }}>
      <BackgroundColor color={accentColor} />
      <section className="section">
        <div className="logo">
          <svg
            fill="none"
            height="57.735"
            width="57.736"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1h27.736v27.736H1zm0 27.998h27.736v27.736H1z"
              style={style}
            />
            <path
              d="M29 1h27.736v27.736H29z"
              style={{ ...style, fill: accentColor }}
            />
            <path d="M29 28.998h27.736v27.736H29z" style={style} />
          </svg>
        </div>
        <div className="heading">Sudoku</div>
        <div className="tagline">Evolve your brain.</div>
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
                sudoku.selectDifficulty({ game: data[difficulty], date });
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
