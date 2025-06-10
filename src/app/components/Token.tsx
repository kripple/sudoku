import { SvgIcon } from '@/app/components/SvgIcon';

import '@/app/components/Token.css';

const tokens = {
  '1': 'fire',
  '2': 'ghost',
  '3': 'electric',
  '4': 'grass',
  '5': 'ice',
  '6': 'water',
  '7': 'flying',
  '8': 'poison',
  '9': 'fairy',
} as const;
type Token = keyof typeof tokens;

export function Token({ token }: { token: Token | string }) {
  const icon = token in tokens ? tokens[token as Token] : undefined;

  return (
    <div className="token">
      {icon ? <SvgIcon icon={icon} color={`var(--token-${icon})`} /> : null}
    </div>
  );
}
