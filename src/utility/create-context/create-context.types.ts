export type Selector<State, Result> = (store: State) => Result;

export type StoreSetFnWithoutPreviousValue<State> = (
  value: Partial<State>,
) => void;

export type StoreSetFnWithPreviousValue<State> = (
  fn: (previousValue: State) => Partial<State>,
) => void;

export type StoreSetFn<State> = StoreSetFnWithoutPreviousValue<State> &
  StoreSetFnWithPreviousValue<State>;

export type StoreState<State> = {
  get: () => State;
  set: (value: Partial<State>) => void;
  subscribe: (callback: () => void) => () => void;
};

export type ContextOptions = {
  storeName?: string;
  compareFn?: <A, B>(a: A, b: B) => boolean;
};

export type UseStore<State> = <Return = State>(
  selector?: Selector<State, Return>,
) => [Return, StoreSetFn<State>];
