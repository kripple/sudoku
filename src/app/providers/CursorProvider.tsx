import {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  useEffect,
} from 'react';
import { Token, TokenKey } from '@/app/components/Token';

import '@/app/providers/CursorProvider.css';

const CursorContext = createContext<TokenKey | undefined>(undefined);
const SetCursorContext = createContext<
  ((cursor?: TokenKey) => void) | undefined
>(undefined);

export const useCursor = () => {
  return useContext(CursorContext);
};

export const useSetCursor = () => {
  return useContext(SetCursorContext) || (() => {});
};

export function CursorProvider({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [cursor, _setCursor] = useState<TokenKey>();
  const icon = cursor ? <Token token={cursor} cursorRef={ref} /> : null;

  // useEffect(() => {
  //   const handleMouseMove = (e: MouseEvent) => {
  //     if (!ref.current) return;
  //     ref.current.style.left = `${e.clientX}px`;
  //     ref.current.style.top = `${e.clientY}px`;
  //   };
  //   document.addEventListener('mousemove', handleMouseMove);
  //   return () => document.removeEventListener('mousemove', handleMouseMove);
  // }, []);

  const setCursor = useCallback((value?: TokenKey) => {
    _setCursor(value);
    // const svgDataUri = `data:image/svg+xml;base64,${btoa(electric)}`;
    // document.body.style.cursor = `url("${svgDataUri}") 0 0, auto`;
  }, []);

  return (
    <SetCursorContext.Provider value={setCursor}>
      <CursorContext.Provider value={cursor}>
        <div className="cursor-icon">{icon}</div>
        {children}
      </CursorContext.Provider>
    </SetCursorContext.Provider>
  );
}
