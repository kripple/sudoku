import { Token } from '@/app/components/Token';
import { type Token as TokenType } from '@/utils/tokens';

export function TokenOption({ token = '' }: { token?: TokenType | string }) {
  if (!['1'].includes(token)) return;
  return (
    <div>
      <Token token={token} />
    </div>
  );
}
