import { observer } from 'mobx-react-lite';

import { Grid } from '@/app/components/Grid';
import { Option } from '@/app/components/Option';
import { sudoku } from '@/app/store/sudoku';
import { ui } from '@/app/store/ui';
import { tokenKeys } from '@/utils/tokens';

import '@/app/observers/Game.css';

export const Game = observer(() => {
  const { display, ...styles } = ui.main;
  const style = {
    ...styles,
    display: sudoku.show ? display : 'none',
  };

  return (
    <main style={style}>
      <div className="game" style={ui.game}>
        <Grid />
      </div>
      <aside className="aside" style={ui.aside}>
        {tokenKeys.map((key) => (
          <div className="option" key={key} style={ui.option}>
            <Option
              onClick={() => sudoku.toggleSetCellValue(key)}
              token={key}
              type="token"
            />
            <Option token={key} type="candidate" />
          </div>
        ))}
      </aside>
    </main>
  );
});
