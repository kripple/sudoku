declare type ReactNode = import('@/types/react').ReactNode;

declare type FormEvent =
  import('@/types/react').ReactFormEvent<HTMLFormElement>;

declare type ChangeEvent =
  import('@/types/react').ReactChangeEvent<HTMLInputElement>;

declare type ClickEvent = import('@/types/react').ReactMouseEvent<
  HTMLInputElement,
  MouseEvent
>;

declare type KeyboardEvent =
  import('@/types/react').ReactKeyboardEvent<HTMLBodyElement>;

declare type SetState<T> = import('@/types/react').SetState<T>;

declare type Ref<T> = import('@/types/react').Ref<T>;

declare type AppDatabase = import('@/types/database').AppDatabase;
