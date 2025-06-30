import { observer } from 'mobx-react-lite';

import { GridCell } from '@/app/components/GridCell';
import { TokenOption } from '@/app/components/TokenOption';
import { sudoku } from '@/app/store/sudoku';
import { ui } from '@/app/store/ui';
import { tokenKeys } from '@/utils/tokens';

import '@/app/components/Game.css';

export const Game = observer(() => {
  const { display, ...styles } = ui.main;
  const style = {
    ...styles,
    display: sudoku.show ? display : 'none',
  };

  return (
    <main style={style}>
      <div className="game" style={ui.game}>
        {Array.from({ length: 81 }).map((_, i) => (
          <GridCell cellId={i} key={i} />
        ))}
      </div>
      <aside className="aside" style={ui.aside}>
        {tokenKeys.map((key) => (
          <TokenOption key={key} token={key} />
        ))}
        {tokenKeys.map((key) => (
          <TokenOption key={key} token={key} />
        ))}
      </aside>
    </main>
  );
});
