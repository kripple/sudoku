import { SvgIcon } from '@/app/components/SvgIcon';
import { type Token as TokenKey, tokens } from '@/constants/tokens';

import '@/app/components/Token.css';

export function Token({ token }: { token: TokenKey | string }) {
  const icon = token in tokens ? tokens[token as TokenKey] : undefined;

  return (
    <div className="token">
      {icon ? <SvgIcon color={`var(--token-${icon})`} icon={icon} /> : null}
    </div>
  );
}
