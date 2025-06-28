import { observer } from 'mobx-react-lite';
import { IoArrowBack as ArrowBackIcon } from 'react-icons/io5';

import { Button } from '@/app/components/Button';
import { Game } from '@/app/components/Game';
import { GameSelectionScreen } from '@/app/components/GameSelectionScreen';

import { AppProviders } from '@/app/providers/AppProviders';
import { sudoku } from '@/app/store/sudoku';
import { ui } from '@/app/store/ui';

import '@/app/components/App.css';

export const App = observer(() => {

  // const [auto, setAuto] = useState<boolean>(false);
  // const toggleAuto = (event: ReactChangeEvent) => {
  //   setAuto(event.currentTarget.checked);
  // };

  // console.log('!!', sudoku.response);

  return (
    <AppProviders>
      <header className="header" style={ui.header}>
        {sudoku.difficulty !== undefined ? (
          <Button onClick={() => sudoku.unselectDifficulty()}>
            <ArrowBackIcon />
          </Button>
        ) : null}

        {/* <button onClick={() => toggleAuto}>Auto</button> */}
      </header>
      {sudoku.difficulty ? <Game /> : <GameSelectionScreen />}
    </AppProviders>
  );
});
