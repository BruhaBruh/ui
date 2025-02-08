import { EmptyObject, Schema } from '@bruhabruh/type-safe';
import React from 'react';
import { AsChildProp } from './as-prop';
import { Props } from './props';

export type PropsWithAsChild<
  T extends
    | keyof React.JSX.IntrinsicElements
    | React.JSXElementConstructor<unknown>,
  OmitKeys extends keyof React.ComponentProps<T> | '' = '',
  OmitProps extends
    | Schema<React.ComponentProps<T>, unknown>
    | EmptyObject = EmptyObject,
> = Props<T, OmitKeys, OmitProps> & AsChildProp;
