import { useEffect, useRef } from 'react';

export function useEventListener(
  ...props: [
    type: keyof WindowEventMap,
    listener: EventListenerOrEventListenerObject,
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
