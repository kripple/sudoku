import { Symbol } from '@/app/components/Symbol';
import { Token } from '@/app/components/Token';
import { emptyCell } from '@/constants/config';
import { tokenKeys } from '@/constants/tokens';
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
    <div className="token-select" role="radiogroup">
      {tokenKeys.map((key) => {
        return (
          <div
            className="token-option"
            key={key}
            onClick={() => {
              initiallyEmpty &&
                setInput((draft) => replaceAt(draft, index, key));
            }}
            role="radio"
          >
            <Token token={key} />
          </div>
        );
      })}
      <div
        className="token-option"
        onClick={() => {
          initiallyEmpty &&
            setInput((draft) => replaceAt(draft, index, emptyCell));
        }}
        role="radio"
      >
        <Symbol />
      </div>
    </div>
  );
}
