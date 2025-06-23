import { useCallback } from 'react';

export const useOnKeyDown = () => {
  return useCallback(
    (event: { key: ReactKeyboardEvent['key']; currentTarget: HTMLElement }) => {
      if (event.key === 'Enter') {
        event.currentTarget.click();
      }
      if (event.key === 'Escape') {
        event.currentTarget.blur();
      }
    },
    [],
  );
};
