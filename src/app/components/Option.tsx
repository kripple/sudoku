import '@/app/components/Option.css';

export function Option({
  children,
  className,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return <div onClick={onClick}>{children}</div>;
}
