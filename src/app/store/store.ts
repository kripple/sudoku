import { nanoid } from 'nanoid';

// https://mobx.js.org/defining-data-stores.html#domain-stores
class Store {
  cellCount = 81 as const;
  cellsPerSet = 9 as const;
  setSize = 3 as const;

  constructor() {}
}

export const store = new Store();
