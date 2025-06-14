import { useEffect, useRef } from 'react';

import '@/app/providers/ModalProvider.css';

export function ModalProvider({
  children,
  contents,
  hideModalCheckboxId,
  showModalCheckboxId,
}: {
  children: ReactNode;
  contents: ReactNode;
  hideModalCheckboxId: string;
  showModalCheckboxId: string;
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

  return (
    <>
      <input
        id={showModalCheckboxId}
        ref={refA}
        style={{ display: 'none' }}
        type="checkbox"
      ></input>
      <input
        defaultChecked
        id={hideModalCheckboxId}
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
