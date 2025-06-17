export function GameControl({
  children,
  label,
  hide = false,
  onClick,
}: {
  children: ReactNode;
  label: string;
  hide?: boolean;
  onClick?: () => void;
}) {
  return hide ? null : (
    <div
      aria-label={label}
      className="game-control"
      onClick={() => onClick?.()}
      title={label}
    >
      <div className="game-control-icon">{children}</div>
    </div>
  );
}
