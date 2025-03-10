import type { ContextState } from '@/types';
import React from 'react';

export type SwitchContextState = ContextState<{
  selectedIcon?: React.ReactNode;
  unselectedIcon?: React.ReactNode;
}>;

const SwitchContext = React.createContext<SwitchContextState | null>(null);

export const useSwitchContext = () => {
  const value = React.useContext(SwitchContext);
  if (!value)
    throw new Error('This component must be used within a <Switch> component');
  return value;
};

export const SwitchContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const state = React.useState<SwitchContextState[0]>({});

  return (
    <SwitchContext.Provider value={state}>{children}</SwitchContext.Provider>
  );
};
