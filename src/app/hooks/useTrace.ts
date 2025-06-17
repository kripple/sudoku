import { useEffect, useRef } from 'react';

export const useTrace = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: { [key: string]: any },
  componentName: string,
) => {
  const propsRef = useRef(props);

  useEffect(() => {
    if (!import.meta.env.DEV) return;

    const changesDetected = Object.entries(props).reduce(
      (changes, [key, value]) => {
        if (propsRef.current[key] !== value) {
          changes[key] = [propsRef.current[key], value];
        }
        return changes;
      },
      {} as typeof props,
    );

    Object.keys(changesDetected).forEach((prop) => {
      const change = changesDetected[prop];

      console.groupCollapsed(
        '%c trace',
        'color: gray; font-weight: lighter;',
        `${componentName}: ${prop}`,
      );
      console.log('prev state', change[0]);
      console.log('next state', change[1]);
      console.groupEnd();
    });

    propsRef.current = props;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);
};
