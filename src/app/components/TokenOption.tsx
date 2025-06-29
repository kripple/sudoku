import { Token } from '@/app/components/Token';
import { type Token as TokenType } from '@/utils/tokens';

export function TokenOption({ token = '' }: { token?: TokenType | string }) {
  return (
    <div>
      <Token token={token} />
    </div>
  );
}
