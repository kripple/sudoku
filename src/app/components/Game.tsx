import { observer } from 'mobx-react-lite';

import { GridCell } from '@/app/components/GridCell';
import { TokenOption } from '@/app/components/TokenOption';
import { ui } from '@/app/store/ui';
import { tokenKeys } from '@/utils/tokens';

import '@/app/components/Game.css';

export const Game = observer(() => {
  // const gameControls = tokenKeys.map((key) => {
  //   const disabled =
  //     sudoku.reduce((count, cell) => {
  //       if (cell.value === key && cell.value === cell.solution) {
  //         return count + 1;
  //       } else {
  //         return count;
  //       }
  //     }, 0) === gameSize;
  //   return (
  //     <Option key={key}>
  //       <Token
  //         className={disabled ? 'disabled' : undefined}
  //         onClick={() => setSelectedValue(key)}
  //         token={key}
  //       />
  //       {/* <div className="candidate-token" onClick={() => setCandidate(key)}>
  //         <Token token={key} />
  //       </div> */}
  //     </Option>
  //   );
  // });
  return (
    <main style={ui.main}>
      <div className="game" style={ui.game}>
        {Array.from({ length: 81 }).map((_, i) => (
          <GridCell cellId={i} key={i} />
        ))}
      </div>
      <aside className="aside" style={ui.aside}>
        {tokenKeys.map((key) => (
          <TokenOption key={key} token={key} />
        ))}
      </aside>
    </main>
  );
});
