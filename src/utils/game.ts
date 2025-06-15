export const gameSize = 9 as const;
export const miniGameSize = Math.sqrt(gameSize);

export const emptyCell = '-' as const;

export const getColId = (index: number) => (index % gameSize) + 1;
export const getRowId = (index: number) => Math.floor(index / gameSize) + 1;
export const getSetId = (colRowId: number) =>
  Math.floor((colRowId - 1) / miniGameSize);
