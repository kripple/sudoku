import { useEventListener } from '@/app/hooks/useEventListener';
import { useSudoku } from '@/app/hooks/useSudoku';
import { screen } from '@/app/store/screen';

export function AppLoader({ children }: { children: ReactNode }) {
  useSudoku(); // fetch immediately
  useEventListener('resize', screen.handleResize); // add observer?
  return <>{children}</>;
}
