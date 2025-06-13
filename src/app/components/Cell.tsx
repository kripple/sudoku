import { Candidates } from '@/app/components/Candidates';
import { Token } from '@/app/components/Token';
import { emptyCell, gameSize } from '@/constants/config';

import '@/app/components/Cell.css';

export function Cell({
  index,
  initialValue,
  currentValue,
  solution,
  selected,
  setSelected,
}: {
  index: number;
  initialValue: string;
  currentValue: string;
  solution: string;
  selected: boolean;
  setSelected: SetState<number>;
}) {
  const rowId = (index % gameSize) + 1;
  const colId = Math.floor(index / gameSize) + 1;

  const isBorderCell = (id: number) =>
    !selected && id % Math.sqrt(gameSize) === 0;
  const initiallyEmpty = initialValue === emptyCell;
  const incorrect =
    initiallyEmpty && currentValue !== emptyCell && currentValue !== solution
      ? 'incorrect'
      : false;
  const highlight = selected ? 'highlight' : false;

  const classNames = [
    'game-cell',
    `row-${rowId}`,
    `col-${colId}`,
    isBorderCell(rowId) ? 'border-right' : false,
    isBorderCell(colId) ? 'border-bottom' : false,
    initiallyEmpty ? 'empty' : 'filled',
    incorrect,
    highlight,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={classNames}
      key={`row-${rowId}-col-${colId}`}
      onClick={() => setSelected(index)}
    >
      <Token token={currentValue}>
        <Candidates readOnly={!selected} />
      </Token>
    </div>
  );
}
