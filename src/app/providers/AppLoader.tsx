import { useEventListener } from '@/app/hooks/useEventListener';
import { useSudoku } from '@/app/hooks/useSudoku';
import { ui } from '@/app/store/ui';

export function AppLoader({ children }: { children: ReactNode }) {
  useSudoku(); // fetch immediately
  useEventListener('resize', ui.handleResize);
  return <>{children}</>;
}
