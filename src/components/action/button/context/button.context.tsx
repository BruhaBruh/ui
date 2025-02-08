'use client';

import { ContextState } from '@/types';
import React from 'react';

export type ButtonContextState = ContextState<{
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}>;

const ButtonContext = React.createContext<ButtonContextState | null>(null);

export const useButtonContext = () => {
  const value = React.useContext(ButtonContext);
  if (!value)
    throw new Error('This component must be used within a <Button> component');
  return value;
};

export const ButtonContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const state = React.useState<ButtonContextState[0]>({});

  return (
    <ButtonContext.Provider value={state}>{children}</ButtonContext.Provider>
  );
};
