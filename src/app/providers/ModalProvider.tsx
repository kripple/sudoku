import { useEffect, useRef } from 'react';

import {
  hideModalCheckboxId,
  showModalCheckboxId,
} from '@/app/utils/constants';

import '@/app/providers/ModalProvider.css';

export function ModalProvider({
  children,
  contents,
}: {
  children: ReactNode;
  contents: ReactNode;
}) {
  const refA = useRef<HTMLInputElement>(null);
  const refB = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      if (!refA.current || !refB.current) {
        console.warn('missing input element');
        return;
      }
      // if modal is visible, hide modal
      if (refA.current.checked === refB.current.checked) refB.current.click();
    };
    document.body.addEventListener('keydown', handleEscape);
    return () => document.body.removeEventListener('keydown', handleEscape);
  }, []);

  const toggleAllowScroll = () => {
    if (!refA.current || !refB.current) {
      console.warn('missing input element');
      return;
    }
    document.documentElement.style.overflowY =
      refA.current.checked === refB.current.checked ? 'hidden' : 'initial';
  };

  return (
    <>
      <input
        id={showModalCheckboxId}
        onChange={toggleAllowScroll}
        ref={refA}
        style={{ display: 'none' }}
        type="checkbox"
      ></input>
      <input
        defaultChecked
        id={hideModalCheckboxId}
        onChange={toggleAllowScroll}
        ref={refB}
        style={{ display: 'none' }}
        type="checkbox"
      ></input>
      <label className="modal" htmlFor={hideModalCheckboxId}>
        <div className="modal-contents">
          <div className="modal-actions">
            <div className="modal-actions-close" />
          </div>
          {contents}
        </div>
      </label>
      <div className="modal-provider">{children}</div>
    </>
  );
}
