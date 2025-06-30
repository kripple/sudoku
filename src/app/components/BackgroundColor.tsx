import { useEffect, useRef } from 'react';

export function BackgroundColor({ color }: { color: string }) {
  const ref = useRef(color);

  useEffect(() => {
    const bgcolor = 'background-color' as const;

    document.documentElement.style.setProperty(bgcolor, ref.current);
    return () => {
      document.documentElement.style.removeProperty(bgcolor);
    };
  }, []);

  return null;
}
