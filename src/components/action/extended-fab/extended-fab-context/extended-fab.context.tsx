'use client';

import React from 'react';

export type ExtendedFabContextState = {
  icon?: React.ReactNode;
  setIcon: (node: React.ReactNode) => void;
};

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
  const [icon, setIcon] = React.useState<React.ReactNode>(null);

  const value = React.useMemo<ExtendedFabContextState>(
    () => ({
      icon,
      setIcon,
    }),
    [icon],
  );

  return (
    <ExtendedFabContext.Provider value={value}>
      {children}
    </ExtendedFabContext.Provider>
  );
};
