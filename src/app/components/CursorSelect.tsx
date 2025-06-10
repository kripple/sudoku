import { Token } from '@/app/components/Token';
import { useCursor, useSetCursor } from '@/app/providers/CursorProvider';
import { tokenKeys } from '@/constants/tokens';

import '@/app/components/CursorSelect.css';

export function CursorSelect() {
  const cursor = useCursor();
  const setCursor = useSetCursor();

  return (
    <div className="cursor-select" role="radiogroup">
      {tokenKeys.map((key) => {
        return (
          <div className="cursor-option" key={key} role="radio">
            <Token token={key} />
          </div>
        );
      })}
    </div>
  );
}
