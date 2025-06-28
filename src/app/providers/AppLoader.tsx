import { useEventListener } from '@/app/hooks/useEventListener';
import { ui } from '@/app/store/ui';

export function AppLoader({ children }: { children: ReactNode }) {
  useEventListener('resize', ui.handleResize);
  return <>{children}</>;
}
