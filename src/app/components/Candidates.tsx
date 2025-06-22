import { useEffect, useMemo, useState } from 'react';

import { Token } from '@/app/components/Token';
import type { Cell, ToggleHandler } from '@/app/hooks/useSudoku';
import { tokenKeys } from '@/utils/tokens';

import '@/app/components/Candidates.css';

export function Candidates({
  cell,
  cells,
  readOnly,
  auto,
  toggleCandidate,
  toggleExcludeAutoCandidate,
}: {
  cell: Cell;
  cells: Cell[];
  readOnly: boolean;
  auto: boolean;
  toggleCandidate: ToggleHandler;
  toggleExcludeAutoCandidate: ToggleHandler;
}) {
  const [count, setCount] = useState<number>(0);

  const autoCandidates = useMemo(() => {
    const validOptions = new Set(tokenKeys as string[]);
    cells.forEach((comparisonCell) => {
      if (cell.index == comparisonCell.index) return; // skip self compare
      if (comparisonCell.solution !== comparisonCell.value) return;
      if (
        cell.rowId == comparisonCell.rowId ||
        cell.colId == comparisonCell.colId ||
        cell.setId == comparisonCell.setId
      ) {
        validOptions.delete(comparisonCell.value);
      }
    });
    return [...validOptions].join('');
  }, [cell, cells]);

  useEffect(() => {
    setCount((current) => current + 1);
  }, [auto, cell]);

  return (
    <div className="candidates">
      {tokenKeys.map((key) => {
        const renderKey = `${key}-${count}`;
        const id = `cell-${cell.index}-candidate-${key}`;
        const visible = !auto || (auto && autoCandidates.includes(key));
        const checked =
          (auto &&
            autoCandidates.includes(key) &&
            !cell.excludedAutoCandidates.includes(key)) ||
          (!auto && cell.userCandidates.includes(key));
        return (
          <div className="candidate" key={key}>
            <input
              className="candidate-input"
              defaultChecked={checked}
              disabled={readOnly}
              id={id}
              key={renderKey}
              onChange={() => {
                (auto ? toggleExcludeAutoCandidate : toggleCandidate)({
                  index: cell.index,
                  value: key,
                });
              }}
              style={{ display: 'none' }}
              type="checkbox"
            ></input>
            <label
              className="candidate-label"
              htmlFor={id}
              style={{ visibility: visible ? 'visible' : 'hidden' }}
            >
              <Token token={key} />
            </label>
          </div>
        );
      })}
    </div>
  );
}
