import { makeAutoObservable } from 'mobx';

import { screen } from '@/app/store/screen';

// https://mobx.js.org/defining-data-stores.html#ui-stores
class Ui {
  get header() {
    return {
      height: screen.headerHeight + screen.offset * 2,
      padding: screen.padding + screen.offset,
      width: screen.width,
    } as const;
  }

  get main() {
    return {
      alignItems: screen.shouldWrap ? 'center' : 'flex-start',
      display: 'flex',
      flexDirection: screen.shouldWrap ? 'column' : 'row',
      gap: screen.padding - screen.offset,
      height: screen.mainHeight,
      justifyContent: screen.shouldWrap ? 'flex-start' : 'center',
      minHeight: screen.minHeight,
      padding: screen.padding,
      width: screen.mainWidth,
    } as const;
  }

  get aside() {
    return {
      display: 'flex',
      flexDirection: screen.shouldWrap ? 'row' : 'column',
      flexShrink: 0,
      ...(screen.shouldWrap
        ? {
            height: screen.asideSize,
            maxHeight: screen.gameSize / 3,
            width: screen.gameSize,
          }
        : {
            height: screen.gameSize,
            maxWidth: screen.gameSize / 3,
            width: screen.asideSize,
          }),
      margin: screen.offset,
      padding: screen.padding / 2,
    } as const;
  }

  get game() {
    return {
      display: 'flex',
      flexWrap: 'wrap',
      flexShrink: 0,
      height: screen.gameSize,
      margin: screen.offset,
      width: screen.gameSize,
    } as const;
  }

  get borderedCell() {
    return {
      height: screen.cellSizeOuter,
      width: screen.cellSizeOuter,
    } as const;
  }

  get cell() {
    return {
      height: screen.cellSizeInner,
      width: screen.cellSizeInner,
    } as const;
  }

  get button() {
    return {
      minHeight: screen.buttonHeight,
      minWidth: screen.buttonHeight,
    } as const;
  }

  get option() {
    return {
      display: 'flex',
      height: screen.shouldWrap
        ? screen.asideSize - screen.padding
        : screen.gameSize / 9,
      width: screen.shouldWrap
        ? screen.gameSize / 9
        : screen.asideSize - screen.padding,
    } as const;
  }

  constructor() {
    makeAutoObservable(this);
  }
}

export const ui = new Ui();
