export class Cell {
  index: number;
  rowId: number;
  colId: number;
  setId: number;
  solution: string;
  value: string;
  locked: boolean;
  userCandidates: string = '';
  excludedAutoCandidates: string = '';
  private empty = '-' as const;
  private getColId = (index: number) => (index % 9) + 1;
  private getRowId = (index: number) => Math.floor(index / 9) + 1;
  private getSetId = (index: number) => {
    const row = Math.floor(index / 9);
    const col = index % 9;
    const setRow = Math.floor(row / 3);
    const setCol = Math.floor(col / 3);
    return setRow * 3 + setCol + 1;
  };

  constructor(cell: { index: number; value: string; solution: string }) {
    this.index = cell.index;
    this.value = cell.value;
    this.solution = cell.solution;
    this.rowId = this.getRowId(cell.index);
    this.colId = this.getColId(cell.index);
    this.setId = this.getSetId(cell.index);
    this.locked = cell.value !== this.empty;
  }
}
