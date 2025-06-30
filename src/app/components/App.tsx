import { observer } from 'mobx-react-lite';
import { BsPatchQuestion as QuestionIcon } from 'react-icons/bs';
import { IoChevronBack as BackIcon } from 'react-icons/io5';
import { MdSettings as SettingsIcon } from 'react-icons/md';

import { Button } from '@/app/components/Button';
import { Game } from '@/app/components/Game';
import { GameSelectionScreen } from '@/app/components/GameSelectionScreen';
import { AppProviders } from '@/app/providers/AppProviders';
import { sudoku } from '@/app/store/sudoku';
import { ui } from '@/app/store/ui';
import { format } from '@/utils/time';

import '@/app/components/App.css';

export const App = observer(() => {
  // const [auto, setAuto] = useState<boolean>(false);
  // const toggleAuto = (event: ReactChangeEvent) => {
  //   setAuto(event.currentTarget.checked);
  // };

  return (
    <AppProviders>
      {sudoku.difficulty ? (
        <>
          <header className="header" style={ui.header}>
            {sudoku.difficulty !== undefined ? (
              <Button
                onClick={() => sudoku.unselectDifficulty()}
                variant="icon"
              >
                <BackIcon />
              </Button>
            ) : null}
            <div className="header-text">
              <div className="title">Sudoku</div>
              <div className="date">{format(sudoku.date!)}</div>
              <div className="difficulty">{sudoku.difficulty}</div>
            </div>
            <div className="expand" />
            <Button variant="icon">
              <QuestionIcon />
            </Button>
            <Button variant="icon">
              <SettingsIcon />
            </Button>

            {/* <button onClick={() => toggleAuto}>Auto</button> */}
          </header>
          <Game />
        </>
      ) : (
        <GameSelectionScreen />
      )}
    </AppProviders>
  );
});
