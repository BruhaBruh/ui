export type RippleControl = {
  scale: (value: number) => void;
  opacity: (value: number) => void;
};

export type RippleAnimationFn = (control: RippleControl, t: number) => void;

export type UseRippleOptions = {
  startAnimation: RippleAnimationFn;
  endAnimation: RippleAnimationFn;
  shortAnimationDuration: number;
  longAnimationDuration: number;
};
