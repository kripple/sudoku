import { Cell } from '@/app/components/Cell';
import { TokenSelect } from '@/app/components/TokenSelect';
import { useConfetti } from '@/app/hooks/useConfetti';
import { useKeyboard } from '@/app/hooks/useKeyboard';
import { useStateRef } from '@/app/hooks/useStateRef';
import { useStorage } from '@/app/hooks/useStorage';
import { emptyCell } from '@/constants/config';

import '@/app/components/Game.css';

export function Game() {
  const [sudoku, sudokuRef, input, setInput] = useStorage();
  const cells = sudoku.puzzle.split('');
  const solution = sudoku.solution.split('');
  const inputs = input.split('');

  const win = sudoku.solution === input;
  useConfetti(win);

  const [selected, setSelected, selectedRef] = useStateRef<number>(
    inputs.findIndex((value) => value === emptyCell),
  );
  const initiallyEmpty = cells[selected] === emptyCell;
  useKeyboard({ sudokuRef, indexRef: selectedRef, setInput, setSelected });

  return (
    <div className="game">
      <div className="game-board">
        {inputs.map((input, i) => (
          <Cell
            currentValue={input}
            index={i}
            initialValue={cells[i]}
            key={i}
            selected={i === selected}
            setSelected={setSelected}
            solution={solution[i]}
          />
        ))}
      </div>
      <TokenSelect
        initiallyEmpty={initiallyEmpty}
        selectedIndex={selected}
        setInput={setInput}
      />
    </div>
  );
}
