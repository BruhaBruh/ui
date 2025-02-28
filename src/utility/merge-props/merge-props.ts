import { Props } from '@/types';
import { cn } from '../cn';

/* eslint-disable no-param-reassign */
export const mergeProps = <
  T extends
    | keyof React.JSX.IntrinsicElements
    | React.JSXElementConstructor<unknown> = 'div',
>(
  ...props: (Props<T> | undefined | null)[]
): Props<T> => {
  return (
    props.filter((v) => v !== undefined && v !== null) as Record<
      string,
      unknown
    >[]
  ).reduce(
    (merged, currentProps) => {
      Object.keys(currentProps).forEach((key) => {
        const currentValue = currentProps[key];
        const mergedValue = merged[key];

        if (
          typeof currentValue === 'function' &&
          typeof mergedValue === 'function'
        ) {
          merged[key] = (...args: unknown[]) => {
            mergedValue(...args);
            currentValue(...args);
          };
        } else if (key === 'className') {
          merged[key] = cn(mergedValue ?? '', currentValue ?? '');
        } else {
          merged[key] = mergedValue ?? currentValue;
        }
      });
      return merged;
    },
    {} as Record<string, unknown>,
  ) as Props<T>;
};
