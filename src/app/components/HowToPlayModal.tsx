export function HowToPlayModal() {
  return (
    <div>
      <div aria-label="close" tabIndex={0}>
        CLOSE
      </div>

      <div>
        <h1>How To Play</h1>
        <p>Fill each 3 x 3 set with all 9 tokens.</p>
        <ul>
          <li>Tap a cell in any set, then select a token.</li>
          <li>
            Fill cells until the board is complete. Tokens in sets, rows or
            columns cannot repeat.
          </li>
          <li>Note: Each token can only appear on the board 9 times.</li>
        </ul>
      </div>
    </div>
  );
}
