import { useState } from 'react';
import { MdInfo as InfoIcon } from 'react-icons/md';

import { Candidates } from '@/app/components/Candidates';
import { Cell } from '@/app/components/Cell';
import { HowToPlayModal } from '@/app/components/HowToPlayModal';
import { Option } from '@/app/components/Option';
import { Token } from '@/app/components/Token';
import { useEffectOnFirstChange } from '@/app/hooks/useEffectOnFirstChange';
// import { useKeyboard } from '@/app/hooks/useKeyboard';
import { useOnKeyDown } from '@/app/hooks/useOnKeyDown';
import { type Cell as CellType, useSudoku } from '@/app/hooks/useSudoku';
import { ModalProvider } from '@/app/providers/ModalProvider';
import { showModalCheckboxId } from '@/app/utils/constants';
import { emptyCell, gameSize } from '@/utils/game';
import { tokenKeys } from '@/utils/tokens';

import '@/app/components/App.css';

export function App() {
  const {
    sudoku,
    toggleCellValue,
    toggleCandidate,
    toggleExcludeAutoCandidate,
  } = useSudoku();
  const [selected, setSelected] = useState<CellType>();
  const [auto, setAuto] = useState<boolean>(false);
  const toggleAuto = (event: ReactChangeEvent) => {
    setAuto(event.currentTarget.checked);
  };
  const onKeyDown = useOnKeyDown();

  useEffectOnFirstChange(() => {
    const firstEmptyCell = sudoku.find(
      (cell) => cell.value === emptyCell || cell.value !== cell.solution,
    );
    setSelected(firstEmptyCell);
  }, [sudoku]);

  // useKeyboard({ sudokuRef, indexRef: selectedRef, setInput, setSelectedIndex });

  const setSelectedValue =
    selected !== undefined
      ? (value: string) => toggleCellValue({ index: selected.index, value })
      : () => {};

  // const setCandidate =
  //   selected !== undefined
  //     ? (value: string) =>
  //         (auto ? toggleExcludeAutoCandidate : toggleCandidate)({
  //           index: selected.index,
  //           value,
  //         })
  //     : () => {};

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
          toggleCandidate={toggleCandidate}
          toggleExcludeAutoCandidate={toggleExcludeAutoCandidate}
        />
      </Cell>
    );
  });

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
      <Option key={key}>
        <Token
          className={disabled ? 'disabled' : undefined}
          onClick={() => setSelectedValue(key)}
          token={key}
        />
        {/* <div className="candidate-token" onClick={() => setCandidate(key)}>
          <Token token={key} />
        </div> */}
      </Option>
    );
  });

  return (
    <div className="app">
      <ModalProvider contents={<HowToPlayModal />}>
        <header className="header">
          <div className="app-title">Sudoku</div>
          <label
            className="header-button-text toggle-button"
            onKeyDown={onKeyDown}
            tabIndex={0}
          >
            <input
              defaultChecked={auto}
              key={auto.toString()}
              onChange={toggleAuto}
              tabIndex={-1}
              type="checkbox"
            />{' '}
            Auto
          </label>

          <label
            className="checkbox-label"
            htmlFor={showModalCheckboxId}
            onKeyDown={onKeyDown}
            tabIndex={0}
          >
            <InfoIcon
              aria-label="How To Play"
              className="react-icon hide-for-desktop header-button"
              title="How To Play"
            />
            <span className="hide-for-mobile header-button">
              <span className="header-button-text">How To Play</span>
            </span>
          </label>
        </header>
        <main className="main">
          <div className="main-contents">{gameCells}</div>
          <aside className="aside">{gameControls}</aside>
        </main>
      </ModalProvider>
    </div>
  );
}
