import { Symbol } from '@/app/components/Symbol';
import { Token } from '@/app/components/Token';
import { useSetCursor } from '@/app/providers/CursorProvider';
import { tokenKeys } from '@/constants/tokens';

import '@/app/components/CursorSelect.css';

export function CursorSelect() {
  const setCursor = useSetCursor();

  return (
    <div className="cursor-select" role="radiogroup">
      {tokenKeys.map((key) => {
        return (
          <div
            className="cursor-option"
            key={key}
            onClick={() => setCursor(key)}
            role="radio"
          >
            <Token token={key} />
          </div>
        );
      })}
      <div
        className="cursor-option"
        onClick={() => setCursor(undefined)}
        role="radio"
      >
        <Symbol />
      </div>
    </div>
  );
}
