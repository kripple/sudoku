import { useEffect } from 'react';

import { Candidates } from '@/app/components/Candidates';
import { Cell } from '@/app/components/Cell';
import { GameControls } from '@/app/components/GameControls';
import { TokenSelect } from '@/app/components/TokenSelect';
import { useConfetti } from '@/app/hooks/useConfetti';
import { useKeyboard } from '@/app/hooks/useKeyboard';
import { useSudoku } from '@/app/hooks/useSudoku';
import { emptyCell, getColId, getRowId, getSetId } from '@/utils/game';

import '@/app/components/Game.css';

export function Game() {
  const { sudoku, selected, setSelectedValue, startNewGame } = useSudoku();

  return (
    <div className="game">
      <div className="game-board">
        {sudoku.map((cell, i) => {
          // determine highlights based on selected cell
          // const sameRow = getRowId(i) === getRowId(selectedIndex);
          // const sameColumn = getColId(i) === getColId(selectedIndex);
          // const sameSet =
          //   getSetId(getRowId(i)) === getSetId(getRowId(selectedIndex)) &&
          //   getSetId(getColId(i)) === getSetId(getColId(selectedIndex));
          // const sameValue = input === inputs[selectedIndex];

          return (
            <Cell
              // highlight={sameRow || sameColumn || sameSet}
              highlight={false}
              key={i}
              sameValue={false}
              selected={selected !== undefined && cell.index === selected.index}
              setSelectedIndex={() => {}}
              {...cell}
            >
              {/* <Candidates
                candidates={candidates[i]}
                index={i}
                readOnly={i !== selectedIndex}
                setCandidates={setCandidates}
              /> */}
            </Cell>
          );
        })}
      </div>
      <TokenSelect setSelectedValue={setSelectedValue} />
      <GameControls
        enableAutoCandidatesMode={() => {}}
        showNewGameButton={true}
        startNewGame={startNewGame}
      />
    </div>
  );
}
