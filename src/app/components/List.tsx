import '@/app/components/List.css';

export function List({ items }: { items: string[] }) {
  return (
    <ul className="list">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
