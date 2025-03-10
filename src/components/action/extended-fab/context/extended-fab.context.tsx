import type { ContextState } from '@/types';
import React from 'react';

export type ExtendedFabContextState = ContextState<{
  icon?: React.ReactNode;
}>;

const ExtendedFabContext = React.createContext<ExtendedFabContextState | null>(
  null,
);

export const useExtendedFabContext = () => {
  const value = React.useContext(ExtendedFabContext);
  if (!value)
    throw new Error(
      'This component must be used within a <ExtendedFab> component',
    );
  return value;
};

export const ExtendedFabContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const state = React.useState<ExtendedFabContextState[0]>({});

  return (
    <ExtendedFabContext.Provider value={state}>
      {children}
    </ExtendedFabContext.Provider>
  );
};
