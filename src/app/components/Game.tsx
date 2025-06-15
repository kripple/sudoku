import { useEffect } from 'react';

import { Candidates } from '@/app/components/Candidates';
import { Cell } from '@/app/components/Cell';
import { GameControls } from '@/app/components/GameControls';
import { TokenSelect } from '@/app/components/TokenSelect';
import { useConfetti } from '@/app/hooks/useConfetti';
import { useKeyboard } from '@/app/hooks/useKeyboard';
import { useStorage } from '@/app/hooks/useStorage';
import { emptyCell, getColId, getRowId, getSetId } from '@/utils/game';

import '@/app/components/Game.css';

export function Game() {
  const {
    sudoku,
    sudokuRef,
    input,
    setInput,
    candidates,
    setCandidates,
    startNewGame,
    inputs,
    selectedIndex,
    setSelectedIndex,
    selectedRef,
    enableAutoCandidatesMode,
  } = useStorage();
  const cells = sudoku.puzzle.split('');
  const solution = sudoku.solution.split('');

  const win = sudoku.solution === input;
  useConfetti(win);

  const initiallyEmpty = cells[selectedIndex] === emptyCell;
  useKeyboard({ sudokuRef, indexRef: selectedRef, setInput, setSelectedIndex });

  useEffect(() => {
    if (!win) return;
    setSelectedIndex(-1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [win]);

  return (
    <div className="game">
      <div className="game-board">
        {inputs.map((input, i) => {
          // determine highlights based on selected cell
          const sameRow = getRowId(i) === getRowId(selectedIndex);
          const sameColumn = getColId(i) === getColId(selectedIndex);
          const sameSet =
            getSetId(getRowId(i)) === getSetId(getRowId(selectedIndex)) &&
            getSetId(getColId(i)) === getSetId(getColId(selectedIndex));

          return (
            <Cell
              currentValue={input}
              highlight={sameRow || sameColumn || sameSet}
              index={i}
              initialValue={cells[i]}
              key={i}
              selected={i === selectedIndex}
              setSelectedIndex={setSelectedIndex}
              solution={solution[i]}
            >
              <Candidates
                candidates={candidates[i]}
                index={i}
                readOnly={i !== selectedIndex}
                setCandidates={setCandidates}
              />
            </Cell>
          );
        })}
      </div>
      <TokenSelect
        initiallyEmpty={initiallyEmpty}
        selectedIndex={selectedIndex}
        setInput={setInput}
      />
      <GameControls
        enableAutoCandidatesMode={enableAutoCandidatesMode}
        showNewGameButton={win}
        startNewGame={startNewGame}
      />
    </div>
  );
}
