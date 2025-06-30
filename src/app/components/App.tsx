import { Game } from '@/app/components/Game';
import { GameSelectionScreen } from '@/app/components/GameSelectionScreen';
import { Header } from '@/app/components/Header';
import { AppProviders } from '@/app/providers/AppProviders';

import '@/app/components/App.css';

export function App() {
  // const [auto, setAuto] = useState<boolean>(false);
  // const toggleAuto = (event: ReactChangeEvent) => {
  //   setAuto(event.currentTarget.checked);
  // };

  return (
    <AppProviders>
      <Header />
      <Game />
      <GameSelectionScreen />
    </AppProviders>
  );
}
