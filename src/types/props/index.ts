import React from 'react';

type AsChildProp = { asChild?: boolean };

export type Props<
  T extends
    | keyof React.JSX.IntrinsicElements
    | React.JSXElementConstructor<unknown>,
  OmitProps extends object = object,
  OmitKeys extends string = '',
> = Omit<React.ComponentProps<T>, keyof OmitProps | OmitKeys>;

export type PropsWithAsChild<
  T extends
    | keyof React.JSX.IntrinsicElements
    | React.JSXElementConstructor<unknown>,
  OmitProps extends object = object,
  OmitKeys extends string = '',
> = Props<T, OmitProps, OmitKeys> & AsChildProp;
