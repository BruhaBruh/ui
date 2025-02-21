// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const throttle = <T extends (...args: any[]) => void>(
  fn: T,
  delay = 200,
) => {
  let timer: number | undefined;
  let lastExecutedAt: number | undefined;

  return function (this: unknown, ...args: Parameters<T>) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;
    const now = performance.now();

    if (lastExecutedAt === undefined) {
      fn.apply(context, args);
      lastExecutedAt = now;
    } else {
      if (timer !== undefined) {
        clearTimeout(timer);
      }

      const remaining = delay - (now - lastExecutedAt);
      timer = window.setTimeout(
        () => {
          fn.apply(context, args);
          lastExecutedAt = performance.now();
        },
        Math.max(remaining, 0),
      );
    }
  } as T;
};
