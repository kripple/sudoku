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

export function SvgIcon({
  icon: key,
  color,
}: {
  icon: TokenIcon;
  color?: string;
}) {
  const icon = icons[key];

  (async () => {
    if (import.meta.env.DEV) {
      const svg = await import(`@/app/assets/${key}.svg?raw`);
      const validateSvg = (await import('@/utils/svg-validate')).validateSvg;
      validateSvg(key, svg.default, icon);
    }
  })();

  return (
    <svg
      fill="currentColor"
      style={{ color }}
      viewBox={icon.viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={icon.dataPath}></path>
      {/* TODO: remove check once all the svgs have stroke paths, also update svg type */}
      {'strokePath' in icon ? (
        <path className="stroke" d={icon.strokePath}></path>
      ) : null}
    </svg>
  );
}
