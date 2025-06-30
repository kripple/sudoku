import { observer } from 'mobx-react-lite';
import { BsPatchQuestion as QuestionIcon } from 'react-icons/bs';
import { IoChevronBack as BackIcon } from 'react-icons/io5';
import { MdSettings as SettingsIcon } from 'react-icons/md';

import { Button } from '@/app/components/Button';
import { sudoku } from '@/app/store/sudoku';
import { ui } from '@/app/store/ui';
import { format } from '@/utils/time';

export const Header = observer(() => {
  return !sudoku.show ? null : (
    <header className="header" style={ui.header}>
      <Button onClick={() => sudoku.unselectDifficulty()} variant="icon">
        <BackIcon />
      </Button>
      <div className="header-text">
        <div className="title">Sudoku</div>
        <div className="date">{format(sudoku.date!)}</div>
        <div className="difficulty">{sudoku.difficulty!}</div>
      </div>
      <div className="expand" />
      <Button variant="icon">
        <QuestionIcon />
      </Button>
      <Button variant="icon">
        <SettingsIcon />
      </Button>
    </header>
  );
});
