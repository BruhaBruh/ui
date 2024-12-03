import React from 'react';

export type Props<
  T extends
    | keyof React.JSX.IntrinsicElements
    | React.JSXElementConstructor<unknown>,
  //@ts-expect-error Empty object is ok
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  OmitProps extends React.ComponentProps<T> = {},
  OmitKeys extends keyof React.ComponentProps<T> | '' = '',
> = Omit<React.ComponentProps<T>, keyof OmitProps | OmitKeys>;
