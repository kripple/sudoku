import { useQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';

import { sudoku } from '@/app/store/sudoku';
import { DTO } from '@/types/data';
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

  const { data } = useQuery<DTO, Error | unknown>({
    queryKey: ['sudoku', ref.current.date],
    queryFn: fetchBaseQuery,
    staleTime: ref.current.ttl,
  });

  useEffect(() => {
    if (!data) return;
    sudoku.sync({ ...JSON.parse(data.value), date: ref.current.date });
  }, [data]);
};
