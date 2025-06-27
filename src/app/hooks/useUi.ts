import { useEffect } from 'react';

import { ui } from '@/app/store/ui';

export function useUi() {
  useEffect(() => {
    ui.addListeners();
    return () => {
      ui.removeListeners();
    };
  }, []);
  return ui;
}
