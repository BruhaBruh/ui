import React from 'react';
import type { CheckboxGroupState } from 'react-stately';

const CheckboxGroupContext = React.createContext<CheckboxGroupState | null>(
  null,
);

export const useCheckboxGroupContext = () => {
  const value = React.useContext(CheckboxGroupContext);
  if (!value)
    throw new Error(
      'This component must be used within a <CheckboxGroup> component',
    );
  return value;
};

export const CheckboxGroupContextProvider: React.FC<
  React.PropsWithChildren<{ state: CheckboxGroupState }>
> = ({ state, children }) => {
  return (
    <CheckboxGroupContext.Provider value={state}>
      {children}
    </CheckboxGroupContext.Provider>
  );
};
