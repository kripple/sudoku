import { observer } from 'mobx-react-lite';
import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

// import { ui } from '@/app/store/ui';

import '@/app/components/Button.css';

export const Button = observer(
  ({
    variant = 'default',
    ...props
  }: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    variant?: 'default' | 'difficulty' | 'icon';
  }) => {
    const classNames = [
      'button',
      variant === 'difficulty' ? 'difficulty-button' : false,
      variant === 'icon' ? 'icon-button' : false,
    ]
      .filter(Boolean)
      .join(' ');

    // style={ui.button}

    return <button className={classNames} {...props} />;
  },
);
