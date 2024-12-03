import React from 'react';
import { AsChildProp } from './as-prop';
import { Props } from './props';

export type PropsWithAsChild<
  T extends
    | keyof React.JSX.IntrinsicElements
    | React.JSXElementConstructor<unknown>,
  //@ts-expect-error Empty object is ok
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  OmitProps extends React.ComponentProps<T> = {},
  OmitKeys extends keyof React.ComponentProps<T> | '' = '',
> = Props<T, OmitProps, OmitKeys> & AsChildProp;
