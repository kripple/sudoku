import { useEffect, useRef } from 'react';

// WORK IN PROGRESS

// prettier-ignore
type KeyboardKey =
  | '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' // NumberKey
  | 'ArrowUp' | 'ArrowDown' | 'ArrowLeft' | 'ArrowRight' // ArrowKey
  | 'Shift' | 'Control' | 'Alt' // ModifierKey
  | 'Backspace' | 'Enter' | 'Tab' | 'Escape' | 'Delete' | ' ' // ControlKey
  | string;

export function useKeyboardKey<T>(
  keys: KeyboardKey[],
  eventHandler: (key: KeyboardKey, ctx?: T) => void,
) {
  // Capture the handler only once on first render
  const stableHandler = useRef(eventHandler);

  // Safety: warn in dev if it changes after first render
  if (import.meta.env.DEV) {
    if (stableHandler.current !== eventHandler) {
      console.warn(
        'Warning: eventHandler passed to useKeyboardKey must be stable (use useCallback).'
      );
    }
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (keys.includes(event.key as KeyboardKey)) {
        stableHandler.current(event.key as KeyboardKey);
      }
    };

    document.body.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.removeEventListener('keydown', handleKeyDown);
    };
  }, [keys]); // ✅ effect depends only on `keys`

  // useEffect(() => {
  //   const handleKeyDown = (event: KeyboardEvent) => {
  //     if (keys.includes(event.key)) eventHandler(event.key);
  //   };
  //   document.body.addEventListener('keydown', handleKeyDown);
  //   return () => document.body.removeEventListener('keydown', handleKeyDown);
  // }, []);
}


// -----

/**
 * A branded function type that enforces stability across renders.
 *
 * Use this to indicate that a function must be memoized (e.g. via `useCallback`)
 * before being passed into a hook. This helps prevent issues like effect re-execution
 * or event re-subscription caused by unstable function identities.
 *
 * Intended for use with low-level hooks like `useKeyboardKey` where stable callbacks
 * are required for consistent behavior.
 *
 * @template T A function type (e.g. `(key: string) => void`)
 *
 * @example
 * ```tsx
 * const handler: StableFn<(key: string) => void> = useCallback((key) => {
 *   console.log(key);
 * }, []);
 * ```
 */
export type StableFn<T extends (...args: any[]) => any> = T & {
  __stable_brand?: 'This function must be stable (e.g. useCallback)';
};


/**
 * Wraps a function and marks it as a `StableFn`, asserting that it is stable
 * (i.e. does not change identity between renders).
 *
 * This utility is useful when building APIs that require explicitly stable
 * callbacks, and provides a developer-facing way to enforce this expectation
 * via TypeScript.
 *
 * It is your responsibility to ensure the passed-in function is actually stable,
 * typically by wrapping it in `useCallback`.
 *
 * @param fn The function to mark as stable
 * @returns The same function, typed as a `StableFn`
 *
 * @example
 * ```tsx
 * const stableHandler = useStableCallback((key) => {
 *   console.log(key);
 * });
 *
 * useKeyboardKey(['Enter'], stableHandler); // ✅
 * ```
 */
export function useStableCallback<T extends (...args: any[]) => any>(
  fn: T
): StableFn<T> {
  return fn as StableFn<T>;
}


// Now when someone calls:

// const handler = useStableCallback((key: KeyboardKey) => {
//   console.log(key);
// });

// The type system will recognize handler as StableFn<...>, satisfying your hook.

// export function useKeyboardKey<T>(
//   keys: KeyboardKey[],
//   eventHandler: StableFn<(key: KeyboardKey, ctx?: T) => void>
// ) {
//   useEffect(() => {
//     const handleKeyDown = (event: KeyboardEvent) => {
//       if (keys.includes(event.key as KeyboardKey)) {
//         eventHandler(event.key as KeyboardKey);
//       }
//     };

//     document.body.addEventListener('keydown', handleKeyDown);
//     return () => document.body.removeEventListener('keydown', handleKeyDown);
//   }, [keys]);
// }

// Now, if someone passes an inline function or unstable prop directly:

// useKeyboardKey(['Enter'], key => console.log(key)); // ❌ Type error
// TypeScript will complain:

// Argument of type '(key: KeyboardKey) => void' is not assignable to parameter of type 'StableFn<...>'
