import { makeAutoObservable } from 'mobx';

// https://mobx.js.org/defining-data-stores.html#ui-stores
class Ui {
  width = 0;
  height = 0;
  controlsSize = 64 as const;
  padding = 16 as const;
  cellCount = 81 as const;
  cellsPerSet = 9 as const;
  setSize = 3 as const;

  get mainHeight() {
    return this.height - this.controlsSize;
  }
  get mainWidth() {
    return this.width;
  }
  get gameSizeMax() {
    return Math.min(this.mainHeight, this.mainWidth) - 2 * this.padding;
  }
  get stack() {
    return (
      this.mainHeight >= this.padding * 3 + this.gameSizeMax + this.controlsSize
    );
  }
  get gameSize() {
    return this.stack
      ? this.gameSizeMax
      : this.gameSizeMax - this.padding - this.controlsSize;
  }

  get header() {
    return {
      height: this.controlsSize,
      width: this.width,
    } as const;
  }
  get main() {
    return {
      alignItems: this.stack ? 'center' : 'flex-start',
      display: 'flex',
      flexDirection: this.stack ? 'column' : 'row',
      gap: this.padding,
      padding: this.padding,
      height: this.mainHeight,
      width: this.mainWidth,
    } as const;
  }
  get game() {
    return {
      flexShrink: 0,
      height: this.gameSize,
      width: this.gameSize,
    } as const;
  }
  get aside() {
    return {
      flexGrow: 1,
      flexShrink: 0,
      ...(this.stack
        ? {
            height: this.controlsSize,
            width: this.gameSize,
          }
        : {
            height: this.gameSize,
            width: this.controlsSize,
          }),
    } as const;
  }

  get cellSize() {
    return Math.floor(this.gameSize / this.cellsPerSet);
  }
  get cell() {
    return {
      height: this.cellSize,
      width: this.cellSize,
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

  addListeners() {
    window.addEventListener('resize', this.handleResize);
  }

  removeListeners() {
    window.removeEventListener('resize', this.handleResize);
  }
}

export const ui = new Ui();
