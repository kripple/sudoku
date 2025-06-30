import { observer } from 'mobx-react-lite';

import { CandidateOption } from '@/app/components/CandidateOption';
import { Grid } from '@/app/components/Grid';
import { TokenOption } from '@/app/components/TokenOption';
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
            <TokenOption token={key} />
            <CandidateOption token={key} />
          </div>
        ))}
      </aside>
    </main>
  );
});
