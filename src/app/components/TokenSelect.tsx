import { Token } from '@/app/components/Token';
import { tokenKeys } from '@/utils/tokens';
import { replaceAt } from '@/utils/string-replace';

import '@/app/components/TokenSelect.css';

export function TokenSelect({
  initiallyEmpty,
  selectedIndex: index,
  setInput,
}: {
  initiallyEmpty: boolean;
  selectedIndex: number;
  setInput: SetState<string>;
}) {
  return (
    <div className="token-select game-controls">
      {tokenKeys.map((key) => {
        return (
          <div
            className="token-option"
            key={key}
            onClick={() => {
              initiallyEmpty &&
                setInput((draft) => replaceAt(draft, index, key));
            }}
          >
            <Token token={key} />
          </div>
        );
      })}
    </div>
  );
}
