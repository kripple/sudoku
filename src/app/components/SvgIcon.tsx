import { fairy } from '@/app/assets/fairy';
import { fire } from '@/app/assets/fire';
import { grass } from '@/app/assets/grass';
import { ice } from '@/app/assets/ice';
import { electric } from '@/app/assets/electric';
import { water } from '@/app/assets/water';

const icons = {
  fairy,
  fire,
  electric,
  grass,
  ice,
  water,
} as const;

export function SvgIcon({
  icon: key,
  color,
}: {
  icon: keyof typeof icons;
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
      className={`${key}-icon`}
      fill="currentColor"
      style={{
        color,
      }}
      viewBox={icon.viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={icon.dataPath}></path>
    </svg>
  );
}
