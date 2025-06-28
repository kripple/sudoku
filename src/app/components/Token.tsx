import { observer } from 'mobx-react-lite';

import { SvgIcon } from '@/app/components/SvgIcon';
import { color } from '@/app/store/color';
import { type Token as TokenKey, tokens } from '@/utils/tokens';

import '@/app/components/Token.css';

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
    const optionalStyle = color ? { style: { color: tokenColor } } : {};

    return (
      <div onClick={onClick} {...optionalStyle} className="token">
        {icon ? <SvgIcon color={tokenColor} icon={icon} /> : children}
      </div>
    );
  },
);
