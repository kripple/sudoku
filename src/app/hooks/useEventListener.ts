import { useEffect, useRef } from 'react';

export function useEventListener<K extends keyof WindowEventMap>(
  ...props: [
    type: K,
    listener: (event: WindowEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ]
) {
  const ref = useRef(props);

  useEffect(() => {
    const props = ref.current;
    window.addEventListener(...props);
    return () => {
      window.removeEventListener(...props);
    };
  }, []);
}
