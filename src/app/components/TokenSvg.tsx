import { electric } from '@/app/assets/electric';
import { fairy } from '@/app/assets/fairy';
import { fire } from '@/app/assets/fire';
import { flying } from '@/app/assets/flying';
import { ghost } from '@/app/assets/ghost';
import { grass } from '@/app/assets/grass';
import { ice } from '@/app/assets/ice';
import { poison } from '@/app/assets/poison';
import { water } from '@/app/assets/water';
import { type TokenIcon } from '@/utils/tokens';

import '@/app/components/TokenSvg.css';

const icons: { [token in TokenIcon]: SvgProps } = {
  fairy,
  fire,
  electric,
  grass,
  ice,
  water,
  flying,
  poison,
  ghost,
};

export function TokenSvg({
  icon: key,
  color,
}: {
  icon: TokenIcon;
  color?: string;
}) {
  const icon = icons[key];

  (async () => {
    if (!import.meta.env.DEV) return;
    const svg = await import(`@/app/assets/${key}.svg?raw`);
    const validateSvg = (await import('@/utils/svg-validate')).validateSvg;
    validateSvg(key, svg.default, icon);
  })();

  return (
    <svg
      fill="currentColor"
      shapeRendering="geometricPrecision"
      style={{ color }}
      viewBox={`0 0 ${icon.size} ${icon.size}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className="token-background"
        cx={icon.size / 2}
        cy={icon.size / 2}
        r={icon.size / 2 - 1}
      />
      <path className="fill" d={icon.fillPath}></path>
      <path className="stroke" d={icon.strokePath}></path>
    </svg>
  );
}
