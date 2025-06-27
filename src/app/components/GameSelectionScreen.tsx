import type { Difficulty } from 'sudoku-gen/dist/types/difficulty.type';

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
    <main>
      {list.map((difficulty) => (
        <button key={difficulty} onClick={() => setDifficulty(difficulty)}>
          {difficulty}
        </button>
      ))}
    </main>
  );
}
