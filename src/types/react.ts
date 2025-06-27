import type {
  CSSProperties,
  ChangeEvent,
  Dispatch,
  FormEvent,
  KeyboardEvent,
  MouseEvent,
  ReactNode as ReactNodeType,
  RefObject,
  SetStateAction,
} from 'react';

export type ReactNode = ReactNodeType;

export type ReactChangeEvent = ChangeEvent<HTMLInputElement>;

export type ReactFormEvent = FormEvent;

export type ReactMouseEvent = MouseEvent<HTMLInputElement, MouseEvent>;

export type ReactKeyboardEvent = KeyboardEvent<HTMLBodyElement>;

export type SetState<T> = Dispatch<SetStateAction<T>>;

export type Ref<T> = RefObject<T | null>;

export type ReactCSSProperties = CSSProperties;
