import { Candidates } from '@/app/components/Candidates';
import { Cell } from '@/app/components/Cell';
import { TokenSelect } from '@/app/components/TokenSelect';
import { useConfetti } from '@/app/hooks/useConfetti';
import { useKeyboard } from '@/app/hooks/useKeyboard';
import { useStateRef } from '@/app/hooks/useStateRef';
import { useStorage } from '@/app/hooks/useStorage';
import { emptyCell } from '@/constants/config';

import '@/app/components/Game.css';

export function Game() {
  const [sudoku, sudokuRef, input, setInput, candidates, setCandidates] =
    useStorage();
  const cells = sudoku.puzzle.split('');
  const solution = sudoku.solution.split('');
  const inputs = input.split('');

  const win = sudoku.solution === input;
  useConfetti(win);

  const [selectedIndex, setSelected, selectedRef] = useStateRef<number>(
    inputs.findIndex((value) => value === emptyCell),
  );
  const initiallyEmpty = cells[selectedIndex] === emptyCell;
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
            selected={i === selectedIndex}
            setSelected={setSelected}
            solution={solution[i]}
          >
            <Candidates
              candidates={candidates[i]}
              index={i}
              readOnly={i !== selectedIndex}
              setCandidates={setCandidates}
            />
          </Cell>
        ))}
      </div>
      <TokenSelect
        initiallyEmpty={initiallyEmpty}
        selectedIndex={selectedIndex}
        setInput={setInput}
      />
    </div>
  );
}
