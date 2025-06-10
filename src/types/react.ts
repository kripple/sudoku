import type {
  ChangeEvent,
  Dispatch,
  FormEvent,
  MouseEvent,
  ReactNode as ReactNodeType,
  RefObject,
  SetStateAction,
} from 'react';

export type ReactNode = ReactNodeType;

export type ReactChangeEvent = ChangeEvent;

export type ReactFormEvent = FormEvent;

export type ReactMouseEvent = MouseEvent;

export type SetState<T> = Dispatch<SetStateAction<T>>;

export type Ref<T> = RefObject<T | null>;
