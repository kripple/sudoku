import { makeAutoObservable } from 'mobx';

import { store } from '@/app/store/store';

// https://mobx.js.org/defining-data-stores.html#ui-stores
class Ui {
  width = 0;
  height = 0;
  controlsSize = 64 as const;
  padding = 16 as const;

  get derivedValue() {
    const headerHeight = this.controlsSize;
    const asideSize = Math.floor(this.controlsSize * 1.618);
    const mainHeight = this.height - headerHeight;
    const mainWidth = this.width;
    const gameSizeMax = Math.min(mainHeight, mainWidth) - 2 * this.padding;
    const shouldWrap = mainHeight >= this.padding * 3 + gameSizeMax + asideSize;
    const availableGameSize = shouldWrap
      ? gameSizeMax
      : gameSizeMax - this.padding - asideSize;
    const cellSizeOuter = Math.floor(availableGameSize / store.cellsPerSet);
    const cellSizeInner = cellSizeOuter - 6;
    const gameSize = cellSizeOuter * store.cellsPerSet;
    const offset = (availableGameSize - gameSize) / 2;

    return {
      headerHeight,
      asideSize,
      mainHeight,
      mainWidth,
      gameSizeMax,
      shouldWrap,
      gameSize,
      cellSizeOuter,
      cellSizeInner,
      offset,
    };
  }

  get header(): CSSProperties {
    return {
      height: this.derivedValue.headerHeight,
      width: this.width,
    } as const;
  }

  get main(): CSSProperties {
    return {
      alignItems: this.derivedValue.shouldWrap ? 'center' : 'flex-start',
      display: 'flex',
      flexDirection: this.derivedValue.shouldWrap ? 'column' : 'row',
      gap: this.padding - this.derivedValue.offset,
      height: this.derivedValue.mainHeight,
      justifyContent: this.derivedValue.shouldWrap ? 'flex-start' : 'center',
      padding: this.padding,
      width: this.derivedValue.mainWidth,
    } as const;
  }

  get aside(): CSSProperties {
    return {
      flexGrow: 1,
      flexShrink: 0,
      ...(this.derivedValue.shouldWrap
        ? {
            height: this.derivedValue.asideSize,
            maxHeight: this.derivedValue.gameSize / 3,
            width: this.derivedValue.gameSize,
          }
        : {
            height: this.derivedValue.gameSize,
            maxWidth: this.derivedValue.gameSize / 3,
            width: this.derivedValue.asideSize,
          }),
      margin: this.derivedValue.offset,
    } as const;
  }

  get game(): CSSProperties {
    return {
      display: 'flex',
      flexWrap: 'wrap',
      flexShrink: 0,
      height: this.derivedValue.gameSize,
      margin: this.derivedValue.offset,
      width: this.derivedValue.gameSize,
    } as const;
  }

  get borderedCell(): CSSProperties {
    return {
      height: this.derivedValue.cellSizeOuter,
      width: this.derivedValue.cellSizeOuter,
    } as const;
  }

  get cell(): CSSProperties {
    return {
      height: this.derivedValue.cellSizeInner,
      width: this.derivedValue.cellSizeInner,
    } as const;
  }

  handleResize = () => {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  };

  constructor() {
    makeAutoObservable(this);
    this.handleResize();
  }
}

export const ui = new Ui();
