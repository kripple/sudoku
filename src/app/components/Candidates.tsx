import { useId } from 'react';

import { Token } from '@/app/components/Token';
import { tokenKeys } from '@/constants/tokens';

import '@/app/components/Candidates.css';

// TODO: save candidates state to local storage

export function Candidates({ readOnly }: { readOnly: boolean }) {
  const componentId = useId();

  return (
    <div className="candidates">
      {tokenKeys.map((key) => {
        const id = `${componentId}-candidate-${key}`;
        return (
          <div className="candidate" key={key}>
            <input
              className="candidate-input"
              disabled={readOnly}
              id={id}
              style={{ display: 'none' }}
              type="checkbox"
            ></input>
            <label className="candidate-label" htmlFor={id}>
              <Token token={key} />
            </label>
          </div>
        );
      })}
    </div>
  );
}
