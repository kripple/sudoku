import { makeAutoObservable } from 'mobx';

// https://mobx.js.org/defining-data-stores.html#ui-stores
class Screen {
  width = 0;
  height = 0;
  padding = 16 as const;
  buttonHeight = 24 as const;
  minHeight = 500 as const;
  private goldenRatio = 1.618 as const;
  private maxBorderSizeOffset = 4 as const;
  private minGameSize = 333 as const;
  private breakpoint = 500 as const;

  get paddingOffset() {
    return this.padding * 2;
  }

  get controlsSize() {
    return this.buttonHeight + this.paddingOffset;
  }

  get headerHeight() {
    return this.controlsSize;
  }

  get asideSize() {
    return Math.floor(this.controlsSize * this.goldenRatio);
  }

  get mainHeight() {
    return this.height - this.headerHeight;
  }

  get mainWidth() {
    return this.width;
  }

  get shouldWrap() {
    return this.mainWidth < this.breakpoint;
  }

  get availableGameSize() {
    return this.shouldWrap
      ? this.mainWidth - this.paddingOffset
      : Math.min(
          this.mainHeight - this.paddingOffset,
          this.mainWidth - this.asideSize - this.padding * 3,
        );
  }

  private get _cellSizeOuter() {
    return Math.floor(this.availableGameSize / 9);
  }
  private get _gameSize() {
    return this._cellSizeOuter * 9;
  }
  private get _minCellSizeOuter() {
    return this.minGameSize / 9;
  }
  private get isBelowMinSize() {
    return this._gameSize < this.minGameSize;
  }

  get cellSizeOuter() {
    return this.isBelowMinSize ? this._minCellSizeOuter : this._cellSizeOuter;
  }

  get cellSizeInner() {
    const cellSizeInner = this._cellSizeOuter - this.maxBorderSizeOffset;
    const minCellSizeInner = this._minCellSizeOuter - this.maxBorderSizeOffset;
    return this.isBelowMinSize ? minCellSizeInner : cellSizeInner;
  }

  get gameSize() {
    return this.isBelowMinSize ? this.minGameSize : this._gameSize;
  }

  get offset() {
    const offset = (this.availableGameSize - this._gameSize) / 2;
    return this.isBelowMinSize ? 0 : offset;
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

export const screen = new Screen();
