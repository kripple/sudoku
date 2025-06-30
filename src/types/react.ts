import type {
  CSSProperties,
  ChangeEvent,
  Dispatch,
  FormEvent,
  KeyboardEvent,
  MouseEvent,
  MouseEventHandler,
  ReactNode as ReactNodeType,
  RefObject,
  SetStateAction,
} from 'react';

export type ReactNode = ReactNodeType;

export type ReactChangeEvent = ChangeEvent<HTMLInputElement>;

export type ReactFormEvent = FormEvent;

export type ReactMouseEvent = MouseEvent<HTMLInputElement, MouseEvent>;

export type ReactClickEvent = MouseEvent<HTMLButtonElement, MouseEvent>;

export type ReactClickEventHandler = MouseEventHandler<HTMLButtonElement>;

export type ReactKeyboardEvent = KeyboardEvent<HTMLBodyElement>;

export type SetState<T> = Dispatch<SetStateAction<T>>;

export type Ref<T> = RefObject<T | null>;

export type ReactCSSProperties = CSSProperties;
