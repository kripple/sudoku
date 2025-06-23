import { SvgIcon } from '@/app/components/SvgIcon';
import { type Token as TokenKey, tokens } from '@/utils/tokens';

import '@/app/components/Token.css';

export function Token({
  children,
  className,
  token,
  onClick,
}: {
  children?: ReactNode;
  className?: string;
  token: TokenKey | string;
  onClick?: () => void;
}) {
  const icon = token in tokens ? tokens[token as TokenKey] : undefined;
  const color = icon ? `var(--token-${icon})` : undefined;
  const optionalStyle = color ? { style: { color } } : {};

  return (
    <div
      className={`token${className ? ' ' + className : ''}`}
      onClick={onClick}
      {...optionalStyle}
    >
      {icon ? <SvgIcon color={color} icon={icon} /> : children}
    </div>
  );
}
