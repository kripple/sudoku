import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import styles from '@/app/components/Button.module.css';
import { ui } from '@/app/store/ui';

export function Button({
  variant = 'default',
  ...props
}: DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: 'default' | 'difficulty';
}) {
  const classNames = [
    styles.button,
    variant === 'difficulty' ? styles.difficulty : false,
  ]
    .filter(Boolean)
    .join(' ');

  return <button className={classNames} style={ui.button} {...props} />;
}
