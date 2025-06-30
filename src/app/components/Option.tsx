import { Token } from '@/app/observers/Token';
import { type Token as TokenType } from '@/utils/tokens';

import '@/app/components/Option.css';

export function Option({
  disabled,
  token = '',
  type,
  onClick,
}: {
  disabled?: boolean;
  token?: TokenType | string;
  type: 'token' | 'candidate';
  onClick?: ClickEventHandler;
}) {
  return (
    <button
      className={type === 'candidate' ? 'candidate-option' : 'token-option'}
      disabled={disabled}
      onClick={onClick}
    >
      <Token token={token} />
    </button>
  );
}
