import { useState } from 'react';

import { useEventListener } from '@/app/hooks/useEventListener';
// import { useOnKeyDown } from '@/app/hooks/useOnKeyDown';

import '@/app/providers/ModalProvider.css';

export function ModalProvider({
  children,
  contents,
}: {
  children: ReactNode;
  contents: ReactNode;
}) {
  const [show, setShow] = useState<boolean>(false);
  // const onKeyDown = useOnKeyDown();
  useEventListener('keydown', (event) => {
    if ('key' in event && event.key !== 'Escape') return;
    setShow(false);
  });

  return (
    <>
      <div
        className="modal"
        // onClick={() => {
        //   document.documentElement.style.overflowY = show
        //     ? 'hidden'
        //     : 'initial';
        // }}
        // onKeyDown={onKeyDown}
        role="button"
        style={{ display: show ? 'flex' : 'none' }}
        tabIndex={0}
      >
        <div className="modal-contents">
          <div className="modal-actions">
            <div
              className="modal-actions-close"
              onClick={() => setShow(false)}
            />
          </div>
          {contents}
        </div>
      </div>
      {children}
    </>
  );
}
