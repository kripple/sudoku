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
  return (
    <>
      <input
        id={showModalCheckboxId}
        style={{ display: 'none' }}
        type="checkbox"
      ></input>
      <input
        defaultChecked
        id={hideModalCheckboxId}
        style={{ display: 'none' }}
        type="checkbox"
      ></input>
      <div className="modal">{contents}</div>
      <div className="modal-provider">{children}</div>
    </>
  );
}
