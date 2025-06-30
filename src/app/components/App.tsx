import { Game } from '@/app/observers/Game';
import { GameSelectionScreen } from '@/app/observers/GameSelectionScreen';
import { Header } from '@/app/observers/Header';
import { AppProviders } from '@/app/providers/AppProviders';

import '@/app/components/App.css';

// TODO: https://www.npmjs.com/package/framer-motion

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
