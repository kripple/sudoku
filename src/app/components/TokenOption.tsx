import { Token } from '@/app/observers/Token';
import { type Token as TokenType } from '@/utils/tokens';

import '@/app/components/TokenOption.css';

export function TokenOption({
  disabled,
  token = '',
}: {
  disabled?: boolean;
  token?: TokenType | string;
}) {
  return (
    <button className="token-option" disabled={disabled}>
      <Token token={token} />
    </button>
  );
}
