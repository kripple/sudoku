import { Token } from '@/app/observers/Token';
import { type Token as TokenType } from '@/utils/tokens';

import '@/app/components/CandidateOption.css';

export function CandidateOption({
  disabled,
  token = '',
}: {
  disabled?: boolean;
  token?: TokenType | string;
}) {
  return (
    <button className="candidate-option" disabled={disabled}>
      <Token token={token} />
    </button>
  );
}
