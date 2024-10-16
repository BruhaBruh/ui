export type SplitProps<T1 extends object, T2 extends object> = [
  T1,
  Omit<T2, keyof T1>,
];

export type SplitPropsFn<T1 extends object, T2 extends object> = (
  props: T2,
) => SplitProps<T1, T2>;
