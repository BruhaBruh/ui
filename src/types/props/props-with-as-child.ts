import type { EmptyObject, Schema } from '@bruhabruh/type-safe';
import type React from 'react';
import type { AsChildProp } from './as-prop';
import type { Props } from './props';

export type PropsWithAsChild<
  T extends
    | keyof React.JSX.IntrinsicElements
    | React.JSXElementConstructor<unknown>,
  OmitKeys extends keyof React.ComponentProps<T> | '' = '',
  OmitProps extends
    | Schema<React.ComponentProps<T>, unknown>
    | EmptyObject = EmptyObject,
> = Props<T, OmitKeys, OmitProps> & AsChildProp;
