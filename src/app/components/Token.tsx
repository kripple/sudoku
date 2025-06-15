import { SvgIcon } from '@/app/components/SvgIcon';
import { type Token as TokenKey, tokens } from '@/utils/tokens';

import '@/app/components/Token.css';

export function Token({
  children,
  token,
}: {
  children?: ReactNode;
  token: TokenKey | string;
}) {
  const icon = token in tokens ? tokens[token as TokenKey] : undefined;

  return (
    <div className="token">
      {icon ? <SvgIcon color={`var(--token-${icon})`} icon={icon} /> : children}
    </div>
  );
}
