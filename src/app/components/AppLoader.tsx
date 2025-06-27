import { useEventListeners } from '@/app/hooks/useEventListeners';

export function AppLoader({ children }: { children: ReactNode }) {
  useEventListeners();
  return <>{children}</>;
}
