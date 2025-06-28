import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { QueryClient, useQuery as useReactQuery } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';

import { Devtools } from '@/app/providers/Devtools';
import { MS_PER_DAY, msUntilEndOfDay, toIso } from '@/utils/time';

const fetchData = async () => {
  const res = await fetch('/');
  return res.json();
};

export const useQuery = () => {
  const date = toIso(Date.now());
  const expiresAt = msUntilEndOfDay();

  return useReactQuery({
    queryKey: ['sudoku', date],
    queryFn: fetchData,
    staleTime: expiresAt,
  });
};

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
      {import.meta.env.DEV ? <Devtools /> : null}
    </PersistQueryClientProvider>
  );
}
