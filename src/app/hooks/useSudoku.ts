import { useQuery } from '@tanstack/react-query';
import { useRef } from 'react';

import { msUntilEndOfDay, toDate } from '@/utils/time';

const fetchBaseQuery = async () => {
  const res = await fetch(import.meta.env.VITE_API_URL);
  return res.json();
};

export const useSudoku = () => {
  const ref = useRef({
    date: toDate(Date.now()),
    ttl: msUntilEndOfDay(),
  });

  const { data } = useQuery<{ value: string }, Error | unknown>({
    queryKey: ['sudoku', ref.current.date],
    queryFn: fetchBaseQuery,
    staleTime: ref.current.ttl,
  });

  return {
    data: data ? JSON.parse(data.value) : undefined,
    meta: { date: ref.current.date, ttl: ref.current.ttl },
  };
};
