import { Token } from '@/app/components/Token';
import type { Cell } from '@/app/hooks/useSudoku';
import { gameSize } from '@/utils/game';
import { tokenKeys } from '@/utils/tokens';

import '@/app/components/TokenSelect.css';

export function TokenSelect({
  cells,
  setSelectedValue,
}: {
  cells: Cell[];
  setSelectedValue?: (value: string) => void;
}) {
  return (
    <div className="token-select game-controls">
      {tokenKeys.map((key) => {
        const disabled =
          cells.reduce((count, cell) => {
            if (cell.value === key && cell.value === cell.solution) {
              return count + 1;
            } else {
              return count;
            }
          }, 0) === gameSize;
        return (
          <div
            className={`token-option${disabled ? ' disabled' : ''}`}
            key={key}
            onClick={() => setSelectedValue?.(key)}
          >
            <Token token={key} />
          </div>
        );
      })}
    </div>
  );
}
