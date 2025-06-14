import { List } from '@/app/components/List';

export function HowToPlayModal() {
  return (
    <div>
      <div className="heading">How To Play</div>
      <div>Fill each 3 x 3 set with all 9 tokens.</div>
      <span className="gap" />
      <List
        items={[
          'Tap a cell in any set, then select a token.',
          'Fill cells until the board is complete. Tokens in sets, rows or columns cannot repeat.',
          'Note: Each token can only appear on the board 9 times.',
        ]}
      />
    </div>
  );
}
