import { Token } from '@/app/components/Token';
import { tokenKeys } from '@/utils/tokens';

import '@/app/components/TokenSelect.css';

export function TokenSelect({
  setSelectedValue,
}: {
  setSelectedValue?: (value: string) => void;
}) {
  return (
    <div className="token-select game-controls">
      {tokenKeys.map((key) => {
        return (
          <div
            className="token-option"
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
