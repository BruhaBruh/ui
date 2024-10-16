import React from 'react';
import { AsChildProp } from './as-prop';
import { Props } from './props';

export type PropsWithAsChild<
  T extends
    | keyof React.JSX.IntrinsicElements
    | React.JSXElementConstructor<unknown>,
  OmitProps extends object = object,
  OmitKeys extends string = '',
> = Props<T, OmitProps, OmitKeys> & AsChildProp;
