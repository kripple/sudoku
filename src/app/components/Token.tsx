import { SvgIcon } from '@/app/components/SvgIcon';

import '@/app/components/Token.css';

const tokens = {
  '1': 'fairy',
  '2': 'fire',
  '3': 'electric',
  '4': 'grass',
  '5': 'ice',
  '6': 'water',
  '7': 'water',
  '8': 'water',
  '9': 'water',
} as const;
type Token = keyof typeof tokens;

export function Token({ token }: { token: Token | string }) {
  const icon = token in tokens ? tokens[token as Token] : undefined;

  return (
    <div className="token">
      {icon ? <SvgIcon icon={icon} color={`var(--token-${token})`} /> : null}
    </div>
  );
}
