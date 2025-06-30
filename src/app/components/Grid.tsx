import { memo } from 'react';

import { GridCell } from '@/app/observers/GridCell';

export const Grid = memo(function Grid() {
  return (
    <>
      {Array.from({ length: 81 }).map((_, i) => (
        <GridCell cellId={i} key={i} />
      ))}
    </>
  );
});
