export const tokens = {
  '1': 'fairy',
  '2': 'fire',
  '3': 'electric',
  '4': 'grass',
  '5': 'ice',
  '6': 'water',
  '7': 'flying',
  '8': 'poison',
  '9': 'ghost',
} as const;

export type Token = keyof typeof tokens;
export type TokenIcon = (typeof tokens)[keyof typeof tokens];

export const tokenKeys = Object.keys(tokens) as Token[];
export const tokenIcons = Object.values(tokens) as TokenIcon[];
