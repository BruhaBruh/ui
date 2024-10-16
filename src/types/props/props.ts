import React from 'react';

export type Props<
  T extends
    | keyof React.JSX.IntrinsicElements
    | React.JSXElementConstructor<unknown>,
  OmitProps extends object = object,
  OmitKeys extends string = '',
> = Omit<React.ComponentProps<T>, keyof OmitProps | OmitKeys>;
