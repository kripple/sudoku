import { type ReactElement, useEffect, useState } from 'react';

export function Devtools() {
  if (!import.meta.env.DEV) throw Error('devtools intentionally excluded');

  const [devtools, setDevtools] = useState<ReactElement | null>(null);

  useEffect(() => {
    (async () => {
      const { ReactQueryDevtools } = await import(
        '@tanstack/react-query-devtools'
      );
      setDevtools(<ReactQueryDevtools initialIsOpen={false} />);
    })();
  }, []);

  return devtools;
}
