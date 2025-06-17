import { useMemo } from 'react';

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
  const autoCandidates = useMemo(() => {
    const validOptions = new Set(tokenKeys as string[]);
    cells.forEach((comparisonCell) => {
      if (cell.index == comparisonCell.index) return; // skip self compare
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
        const renderKey = `${key}-${auto ? '-auto' : ''}`;
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
              style={{ display: !auto || checked ? 'flex' : 'none' }}
            >
              <Token token={key} />
            </label>
          </div>
        );
      })}
    </div>
  );
}
