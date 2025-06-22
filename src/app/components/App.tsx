import { useState } from 'react';
import { MdInfo as InfoIcon } from 'react-icons/md';

import { Candidates } from '@/app/components/Candidates';
import { Cell } from '@/app/components/Cell';
import { GameControl } from '@/app/components/GameControl';
import { HowToPlayModal } from '@/app/components/HowToPlayModal';
import { Option } from '@/app/components/Option';
import { Token } from '@/app/components/Token';
import { useEffectOnFirstChange } from '@/app/hooks/useEffectOnFirstChange';
import { useKeyboard } from '@/app/hooks/useKeyboard';
import { type Cell as CellType, useSudoku } from '@/app/hooks/useSudoku';
import { ModalProvider } from '@/app/providers/ModalProvider';
import { showModalCheckboxId } from '@/app/utils/constants';
import { emptyCell, gameSize } from '@/utils/game';
import { tokenKeys } from '@/utils/tokens';

import '@/app/components/App.css';

export function App() {
  const { sudoku, toggleCellValue, startNewGame } = useSudoku();
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

  const gameCells = sudoku.map((cell, i) => {
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

  const showNewGameButton = true;
  const setSelectedValue =
    selected !== undefined
      ? (value: string) => toggleCellValue({ index: selected.index, value })
      : selected;

  const gameControls = tokenKeys.map((key) => {
    const disabled =
      sudoku.reduce((count, cell) => {
        if (cell.value === key && cell.value === cell.solution) {
          return count + 1;
        } else {
          return count;
        }
      }, 0) === gameSize;
    return (
      <Option
        className={disabled ? 'disabled' : undefined}
        key={key}
        onClick={() => setSelectedValue?.(key)}
      >
        <Token token={key} />
      </Option>
    );
  });

  return (
    <div className="app">
      <ModalProvider contents={<HowToPlayModal />}>
        <header className="header">
          <div className="game-controls">
            <GameControl label="Automatic Candidates Mode" onClick={toggleAuto}>
              Manual | Automatic
            </GameControl>

            <GameControl
              hide={!showNewGameButton}
              label="New Game"
              onClick={startNewGame}
            >
              New Game
            </GameControl>

            <GameControl label="How To Play">
              <label
                className="show-modal-checkbox-label"
                htmlFor={showModalCheckboxId}
              >
                <InfoIcon className="react-icon" />
              </label>
            </GameControl>
          </div>
        </header>
        <main className="main">
          <div className="main-contents">{gameCells}</div>
          <aside className="aside">{gameControls}</aside>
        </main>
      </ModalProvider>
    </div>
  );
}
