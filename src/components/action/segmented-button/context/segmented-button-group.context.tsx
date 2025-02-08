'use client';

import React from 'react';
import { ToggleGroupState } from 'react-stately';

const SegmentedButtonGroupContext =
  React.createContext<ToggleGroupState | null>(null);

export const useSegmentedButtonGroupContext = () => {
  const value = React.useContext(SegmentedButtonGroupContext);
  if (!value)
    throw new Error(
      'This component must be used within a <SegmentedButtonGroup> component',
    );
  return value;
};

export const SegmentedButtonGroupContextProvider: React.FC<
  React.PropsWithChildren<{ state: ToggleGroupState }>
> = ({ state, children }) => {
  return (
    <SegmentedButtonGroupContext.Provider value={state}>
      {children}
    </SegmentedButtonGroupContext.Provider>
  );
};
