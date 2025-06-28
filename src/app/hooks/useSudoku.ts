import { useQuery } from '@tanstack/react-query';

import type { DTO } from '@/types/data';
import { msUntilEndOfDay, toDate } from '@/utils/time';

const fetchBaseQuery = async () => {
  const res = await fetch(import.meta.env.VITE_API_URL);
  return res.json();
};

export const useSudoku = () => {
  const date = toDate(Date.now());
  const ttl = msUntilEndOfDay();

  return useQuery<DTO>({
    queryKey: ['sudoku', date],
    queryFn: fetchBaseQuery,
    staleTime: ttl,
  });

  // TODO: include metadata in response (date, ttl)
};
