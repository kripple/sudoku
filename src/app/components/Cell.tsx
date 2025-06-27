import { ui } from '@/app/store/ui';

import '@/app/components/Cell.css';

export function Cell() {
  return <div className="cell" style={ui.cell}></div>;
}
