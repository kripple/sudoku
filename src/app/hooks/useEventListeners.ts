import { useEffect } from 'react';

import { ui } from '@/app/store/ui';

export function useEventListeners() {
  useEffect(() => {
    ui.addListeners();
    return () => {
      ui.removeListeners();
    };
  }, []);
}
