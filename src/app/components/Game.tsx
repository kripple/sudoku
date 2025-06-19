import { useEffect, useState } from 'react';

import { Candidates } from '@/app/components/Candidates';
import { Cell } from '@/app/components/Cell';
import { GameControls } from '@/app/components/GameControls';
import { TokenSelect } from '@/app/components/TokenSelect';
import { useEffectOnFirstChange } from '@/app/hooks/useEffectOnFirstChange';
import { useKeyboard } from '@/app/hooks/useKeyboard';
import { type Cell as CellType, useSudoku } from '@/app/hooks/useSudoku';
import { emptyCell } from '@/utils/game';

import '@/app/components/Game.css';

export function Game() {
  const { sudoku, setCellValue, startNewGame } = useSudoku();
  const [selected, setSelected] = useState<CellType>();
  const [auto, setAuto] = useState<boolean>(false);
  const toggleAuto = () => setAuto((current) => !current);

  useEffectOnFirstChange(() => {
    const firstEmptyCell = sudoku.find(
      (cell) => cell.value === emptyCell || cell.value !== cell.solution,
    );
    setSelected(firstEmptyCell);
  }, [sudoku]);

  // useKeyboard({ sudokuRef, indexRef: selectedRef, setInput, setSelectedIndex });

  const cells = sudoku.map((cell, i) => {
    // determine highlights based on selected cell
    const sameRow = cell.rowId === selected?.rowId;
    const sameColumn = cell.colId === selected?.colId;
    const sameSet = cell.setId === selected?.setId;
    const sameValue = cell.value === selected?.value;

    return (
      <Cell
        highlight={sameRow || sameColumn || sameSet}
        key={i}
        sameValue={sameValue}
        selected={cell.index === selected?.index}
        setSelected={setSelected}
        {...cell}
      >
        <Candidates
          auto={auto}
          cell={cell}
          cells={sudoku}
          readOnly={cell.index !== selected?.index}
        />
      </Cell>
    );
  });

  return (
    <div className="game">
      {/* <div className="game-board">{cells}</div>
      <div className="game-controls">
        <TokenSelect
          cells={sudoku}
          setSelectedValue={
            selected !== undefined
              ? (value: string) =>
                  setCellValue({ index: selected.index, value })
              : selected
          }
        />
        <GameControls
          clearCell={
            selected !== undefined
              ? () => setCellValue({ index: selected.index, value: emptyCell })
              : selected
          }
          enableAutoCandidatesMode={toggleAuto}
          showNewGameButton={true}
          startNewGame={startNewGame}
        />
      </div> */}
    </div>
  );
}
