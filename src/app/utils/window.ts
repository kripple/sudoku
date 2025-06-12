import { compressToUTF16, decompressFromUTF16 } from 'lz-string';

export const getFromLocalStorage = (key: string) => {
  const savedValue = window.localStorage.getItem(key);
  return savedValue ? JSON.parse(decompressFromUTF16(savedValue)) : savedValue;
};

export const saveToLocalStorage = (
  key: string,
  value: Parameters<typeof JSON.stringify>['0'],
) => {
  window.localStorage.setItem(key, compressToUTF16(JSON.stringify(value)));
};
