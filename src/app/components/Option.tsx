import { Token } from '@/app/observers/Token';
import { type Token as TokenType } from '@/utils/tokens';

import '@/app/components/Option.css';

export function Option({
  disabled,
  token = '',
  type,
}: {
  disabled?: boolean;
  token?: TokenType | string;
  type: 'token' | 'candidate';
}) {
  return (
    <button
      className={type === 'candidate' ? 'candidate-option' : 'token-option'}
      disabled={disabled}
    >
      <Token token={token} />
    </button>
  );
}
