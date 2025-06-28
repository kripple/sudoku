import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';

import { Devtools } from '@/app/providers/Devtools';
import { MS_PER_DAY } from '@/utils/time';

const debug = false;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: MS_PER_DAY,
    },
  },
});

const persister = createAsyncStoragePersister({
  storage: window.localStorage,
});

export function QueryProvider({ children }: { children: ReactNode }) {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      {children}
      {import.meta.env.DEV && debug ? <Devtools /> : null}
    </PersistQueryClientProvider>
  );
}
