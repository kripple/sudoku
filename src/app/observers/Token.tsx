import { observer } from 'mobx-react-lite';

import { TokenSvg } from '@/app/components/TokenSvg';
import { color } from '@/app/store/color';
import { type Token as TokenKey, tokens } from '@/utils/tokens';

import '@/app/observers/Token.css';

export const Token = observer(
  ({
    children,
    token = '',
    onClick,
  }: {
    children?: ReactNode;
    token?: TokenKey | string;
    onClick?: () => void;
  }) => {
    const icon = token in tokens ? tokens[token as TokenKey] : undefined;
    const tokenColor = icon ? color[icon] : undefined;
    const optionalStyle = tokenColor ? { style: { color: tokenColor } } : {};

    return (
      <div onClick={onClick} {...optionalStyle} className="token">
        {icon ? <TokenSvg color={tokenColor} icon={icon} /> : children}
      </div>
    );
  },
);
