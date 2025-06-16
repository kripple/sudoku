export const emptyCell = '-' as const;
export const gameSize = 9 as const;
export const gameLength = gameSize * gameSize;
export const miniGameSize = Math.sqrt(gameSize);

export const getColId = (index: number) => (index % gameSize) + 1;
export const getRowId = (index: number) => Math.floor(index / gameSize) + 1;
export const getSetId = (index: number) => {
  const row = Math.floor(index / gameSize);
  const col = index % gameSize;

  const setRow = Math.floor(row / miniGameSize);
  const setCol = Math.floor(col / miniGameSize);

  return setRow * miniGameSize + setCol + 1;
};
