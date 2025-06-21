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
  const color = icon ? `var(--token-${icon})` : undefined;
  const optionalStyle = color ? { style: { color } } : {};

  return (
    <div className="token" {...optionalStyle}>
      {/* {icon ? <SvgIcon color={color} icon={icon} /> : children} */}
    </div>
  );
}
