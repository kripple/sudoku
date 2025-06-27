import { useState } from 'react';
import type { Difficulty } from 'sudoku-gen/dist/types/difficulty.type';

import { Candidates } from '@/app/components/Candidates';
import { Cell } from '@/app/components/Cell';
import { Option } from '@/app/components/Option';
import { Token } from '@/app/components/Token';
import { useEffectOnFirstChange } from '@/app/hooks/useEffectOnFirstChange';
// import { useKeyboard } from '@/app/hooks/useKeyboard';
import { type Cell as CellType, useSudoku } from '@/app/hooks/useSudoku';
import { store } from '@/app/store/store';
import { ui } from '@/app/store/ui';
import { emptyCell, gameSize } from '@/utils/game';
import { tokenKeys } from '@/utils/tokens';

import '@/app/components/Game.css';

export function Game() {
  return (
    <main style={ui.main}>
      <div className="game" style={ui.game}>
        {Array.from({ length: store.cellCount }).map((_, i) => (
          <Cell cellId={i} key={i} />
        ))}
      </div>
      <aside className="aside" style={ui.aside}></aside>
    </main>
  );
}
