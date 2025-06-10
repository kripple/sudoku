export const replaceAt = (value: string, index: number, replaceWith: string) =>
  `${value.substring(0, index)}${replaceWith}${value.substring(index + 1)}`;
