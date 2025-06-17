import { useEffect, useRef } from 'react';
import type { DependencyList, EffectCallback } from 'react';

export function useEffectOnFirstChange<T extends EffectCallback>(
  effect: T,
  dependencies?: DependencyList,
) {
  const hasRun = useRef<boolean>(false);
  const isFirstRender = useRef<boolean>(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (!hasRun.current) {
      hasRun.current = true;
      return effect();
    }
  }, dependencies);
}
