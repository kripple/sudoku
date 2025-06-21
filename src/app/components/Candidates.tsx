import { useEffect, useMemo, useState } from 'react';

import { Token } from '@/app/components/Token';
import type { Cell } from '@/app/hooks/useSudoku';
import { tokenKeys } from '@/utils/tokens';

import '@/app/components/Candidates.css';

export function Candidates({
  cell,
  readOnly,
  cells,
  auto,
}: {
  cell: Cell;
  readOnly: boolean;
  cells: Cell[];
  auto: boolean;
}) {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    setCount((current) => current + 1);
  }, [auto, cells]);

  // FIXME: (in auto mode) manually deselecting candidate is not persisted when filling any cell

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

  return (
    <div className="candidates">
      {tokenKeys.map((key) => {
        const renderKey = `${key}-${count}`;
        const id = `cell-${cell.index}-candidate-${key}`;
        const checked = auto && autoCandidates.includes(key);
        return (
          <div className="candidate" key={key}>
            <input
              className="candidate-input"
              defaultChecked={checked}
              disabled={readOnly}
              id={id}
              key={renderKey}
              style={{ display: 'none' }}
              type="checkbox"
            ></input>
            <label
              className="candidate-label"
              htmlFor={id}
              style={{ visibility: !auto || checked ? 'visible' : 'hidden' }}
            >
              <Token token={key} />
            </label>
          </div>
        );
      })}
    </div>
  );
}
