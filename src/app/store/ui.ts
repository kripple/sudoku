import { makeAutoObservable } from 'mobx';

// https://mobx.js.org/defining-data-stores.html#ui-stores
class Ui {
  width = 0;
  height = 0;
  padding = 16 as const;
  buttonHeight = 24 as const;
  goldenRatio = 1.618 as const;
  candidateScale = 0.1 as const;

  get derivedValue() {
    const padding = this.padding * 2;
    const controlsSize = this.buttonHeight + padding;
    const headerHeight = controlsSize;
    const asideSize = Math.floor(controlsSize * this.goldenRatio);
    const mainHeight = this.height - headerHeight;
    const mainWidth = this.width;
    const shouldWrap = mainWidth < 500;

    const availableGameSize = shouldWrap
      ? mainWidth - padding
      : Math.min(
          mainHeight - padding,
          mainWidth - asideSize - this.padding * 3,
        );

    const cellSizeOuter = Math.floor(availableGameSize / 9);
    const cellSizeInner = cellSizeOuter - 4; // max border size adjustment

    const gameSize = cellSizeOuter * 9;
    const offset = (availableGameSize - gameSize) / 2;

    return {
      headerHeight,
      asideSize,
      mainHeight,
      mainWidth,
      shouldWrap,
      gameSize: gameSize < 333 ? 333 : gameSize,
      cellSizeOuter: gameSize < 333 ? 37 : cellSizeOuter,
      cellSizeInner: gameSize < 333 ? 33 : cellSizeInner,
      offset: gameSize < 333 ? 0 : offset,
    };
  }

  get header() {
    return {
      height: this.derivedValue.headerHeight + this.derivedValue.offset * 2,
      padding: this.padding + this.derivedValue.offset,
      width: this.width,
    } as const;
  }

  get main() {
    return {
      alignItems: this.derivedValue.shouldWrap ? 'center' : 'flex-start',
      display: 'flex',
      flexDirection: this.derivedValue.shouldWrap ? 'column' : 'row',
      gap: this.padding - this.derivedValue.offset,
      height: this.derivedValue.mainHeight,
      justifyContent: this.derivedValue.shouldWrap ? 'flex-start' : 'center',
      minHeight: 500,
      padding: this.padding,
      width: this.derivedValue.mainWidth,
    } as const;
  }

  get aside() {
    return {
      display: 'flex',
      flexDirection: this.derivedValue.shouldWrap ? 'row' : 'column',
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
      padding: this.padding / 2,
    } as const;
  }

  get game() {
    return {
      display: 'flex',
      flexWrap: 'wrap',
      flexShrink: 0,
      height: this.derivedValue.gameSize,
      margin: this.derivedValue.offset,
      width: this.derivedValue.gameSize,
    } as const;
  }

  get borderedCell() {
    return {
      height: this.derivedValue.cellSizeOuter,
      width: this.derivedValue.cellSizeOuter,
    } as const;
  }

  get cell() {
    return {
      height: this.derivedValue.cellSizeInner,
      width: this.derivedValue.cellSizeInner,
    } as const;
  }

  get button() {
    return {
      minHeight: this.buttonHeight,
      minWidth: this.buttonHeight,
    } as const;
  }

  get option() {
    return {
      display: 'flex',
      height: this.derivedValue.shouldWrap
        ? this.derivedValue.asideSize - this.padding
        : this.derivedValue.gameSize / 9,
      width: this.derivedValue.shouldWrap
        ? this.derivedValue.gameSize / 9
        : this.derivedValue.asideSize - this.padding,
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
