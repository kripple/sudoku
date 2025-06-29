import { log } from '@/utils/log';

function match(svgString: string, data: SvgProps): boolean {
  const parser = new DOMParser();
  const doc = parser.parseFromString(svgString, 'image/svg+xml');

  const svg = doc.querySelector('svg');
  const fill = svg?.querySelector('path.fill');
  const stroke = svg?.querySelector('path.stroke');

  if (!svg || !fill || !stroke) return false;

  const viewBox = svg.getAttribute('viewBox')?.trim();
  const fillPath = fill.getAttribute('d')?.trim();
  const strokePath = stroke.getAttribute('d')?.trim();

  return (
    viewBox === data.viewBox &&
    fillPath === data.dataPath &&
    strokePath === data.strokePath
  );
}

export function validateSvg(
  name: string,
  svgString: string,
  data: SvgProps,
): void {
  const valid = match(svgString, data);
  if (!valid) {
    log.once(
      `[${name.toUpperCase()}] SVG data does not match. Please update ${name}.svg or ${name}.ts`,
    );
  }
}
