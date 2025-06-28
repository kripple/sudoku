import { HowToPlayModal } from '@/app/components/HowToPlayModal';
import { AppLoader } from '@/app/providers/AppLoader';
import { ModalProvider } from '@/app/providers/ModalProvider';
import { QueryProvider } from '@/app/providers/QueryProvider';

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <QueryProvider>
      <AppLoader>
        <ModalProvider contents={<HowToPlayModal />}>{children}</ModalProvider>
      </AppLoader>
    </QueryProvider>
  );
}
