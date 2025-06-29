import { observer } from 'mobx-react-lite';

import { Token } from '@/app/components/Token';
import { ui } from '@/app/store/ui';
import { type Token as TokenType } from '@/utils/tokens';

import '@/app/components/TokenOption.css';

export const TokenOption = observer(
  ({
    disabled,
    token = '',
  }: {
    disabled?: boolean;
    token?: TokenType | string;
  }) => {
    return (
      <button
        className="token-option"
        disabled={disabled}
        style={ui.tokenOption}
      >
        <Token token={token} />
      </button>
    );
  },
);
