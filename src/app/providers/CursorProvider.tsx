import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

import { Token } from '@/app/components/Token';
import { type Token as TokenKey } from '@/constants/tokens';

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
  const animationFrameId = useRef<number | null>(null);
  const [cursor, _setCursor] = useState<TokenKey>();
  const icon = cursor ? <Token token={cursor} /> : null;

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!ref.current) return;
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
      animationFrameId.current = requestAnimationFrame(() => {
        if (!ref.current) return;
        ref.current.style.left = `${event.clientX}px`;
        ref.current.style.top = `${event.clientY}px`;
      });
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const setCursor = useCallback((value?: TokenKey) => {
    _setCursor(value);

    // const svgDataUri = `data:image/svg+xml;base64,${btoa(electric)}`;
    // document.body.style.cursor = `url("${svgDataUri}") 0 0, auto`;
  }, []);

  return (
    <SetCursorContext.Provider value={setCursor}>
      <CursorContext.Provider value={cursor}>
        <div className="cursor-icon" ref={ref}>
          {icon}
        </div>
        {children}
      </CursorContext.Provider>
    </SetCursorContext.Provider>
  );
}
