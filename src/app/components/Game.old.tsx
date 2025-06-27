import { useState } from 'react';
import type { Difficulty } from 'sudoku-gen/dist/types/difficulty.type';

import { Candidates } from '@/app/components/Candidates';
import { Cell } from '@/app/components/Cell.old';
import { Option } from '@/app/components/Option';
import { Token } from '@/app/components/Token';
import { useEffectOnFirstChange } from '@/app/hooks/useEffectOnFirstChange';
// import { useKeyboard } from '@/app/hooks/useKeyboard';
import { type Cell as CellType, useSudoku } from '@/app/hooks/useSudoku';
import { emptyCell, gameSize } from '@/utils/game';
import { tokenKeys } from '@/utils/tokens';

export function Game({
  auto,
  difficulty,
}: {
  auto: boolean;
  difficulty: Difficulty;
}) {
  const {
    sudoku,
    toggleCellValue,
    toggleCandidate,
    toggleExcludeAutoCandidate,
  } = useSudoku(difficulty);
  const [selected, setSelected] = useState<CellType>();

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
        <Token onClick={() => setSelectedValue(key)} token={key} />
        {/* <div  onClick={() => setCandidate(key)}>
          <Token token={key} />
        </div> */}
      </Option>
    );
  });

  return (
    <main>
      <div>{gameCells}</div>
      <aside>{gameControls}</aside>
    </main>
  );
}
