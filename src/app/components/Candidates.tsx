import { useEffect, useState } from 'react';

import { Token } from '@/app/components/Token';
import type { Cell } from '@/app/hooks/useSudoku';
import { tokenKeys } from '@/utils/tokens';

import '@/app/components/Candidates.css';

export function Candidates({
  cell,
  readOnly,
  auto,
  toggleCandidate,
}: {
  cell: Cell;
  readOnly: boolean;
  auto: boolean;
  toggleCandidate: (props: { index: number; value: string }) => void;
}) {
  const [count, setCount] = useState<number>(0);

  // `defaultChecked` is only relevant for initial render
  // with this strategy, auto candidates will only be forcefully changed when `auto` changes
  useEffect(() => {
    setCount((current) => current + 1);
  }, [auto]);

  return (
    <div className="candidates">
      {tokenKeys.map((key) => {
        const renderKey = `${key}-${count}`;
        const id = `cell-${cell.index}-candidate-${key}`;
        const checked =
          (auto && cell.autoCandidates.includes(key)) ||
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
                toggleCandidate({ index: cell.index, value: key });
              }}
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
