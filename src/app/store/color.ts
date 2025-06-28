import { makeAutoObservable } from 'mobx';

import type { TokenIcon } from '@/utils/tokens';

type TokenMap = { [key in TokenIcon]: string };

// https://mobx.js.org/defining-data-stores.html#ui-stores
class Color implements TokenMap {
  fairy = '#ff359a';
  fire = '#ff5400';
  electric = '#ffe600';
  grass = '#00e41b';
  water = '#1e90ff';
  ice = '#00ffff';
  flying = '#9fa1f2';
  poison = '#c772ff';
  ghost = '#923fdf';

  constructor() {
    makeAutoObservable(this);
  }
}

export const color = new Color();
