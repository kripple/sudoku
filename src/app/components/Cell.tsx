// import { useSudoku } from '@/app/hooks/useSudoku';
import { ui } from '@/app/store/ui';

export function Cell({
  cellId,
  rowId,
  colId,
}: {
  cellId: number;
  rowId: number;
  colId: number;
}) {
  // const { isLoading, isError, data, error } = useSudoku();
  // console.log({
  //   cellId,
  //   rowId,
  //   colId,
  // });

  return <div style={ui.cell}>{cellId}</div>;
}
