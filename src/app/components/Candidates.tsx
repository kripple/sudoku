import { Token } from '@/app/components/Token';
import { tokenKeys } from '@/utils/tokens';

import '@/app/components/Candidates.css';

export function Candidates({
  index,
  readOnly,
  candidates,
  setCandidates,
}: {
  index: number;
  readOnly: boolean;
  candidates: string;
  setCandidates: SetState<string[]>;
}) {
  return (
    <div className="candidates">
      {tokenKeys.map((key) => {
        const id = `cell-${index}-candidate-${key}`;
        const checked = candidates.includes(key);
        return (
          <div className="candidate" key={key}>
            <input
              className="candidate-input"
              defaultChecked={checked}
              disabled={readOnly}
              id={id}
              onChange={(event) => {
                setCandidates((current) => {
                  const draft = [...current];
                  // always remove from string before optionally adding it back
                  let candidatesString = draft[index].replaceAll(key, '');
                  if (event.currentTarget.checked) {
                    candidatesString = candidatesString.concat(key);
                  }
                  draft[index] = candidatesString;
                  return draft;
                });
              }}
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
