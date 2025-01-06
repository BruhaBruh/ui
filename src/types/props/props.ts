import { EmptyObject, Schema } from '@bruhabruh/type-safe';
import React from 'react';

export type Props<
  T extends
    | keyof React.JSX.IntrinsicElements
    | React.JSXElementConstructor<unknown>,
  OmitProps extends
    | Schema<React.ComponentProps<T>, unknown>
    | EmptyObject = EmptyObject,
  OmitKeys extends keyof React.ComponentProps<T> | '' = '',
> = Omit<React.ComponentProps<T>, keyof OmitProps | OmitKeys>;
