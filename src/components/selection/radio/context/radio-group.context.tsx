import React from 'react';
import type { RadioGroupState } from 'react-stately';

const RadioGroupContext = React.createContext<RadioGroupState | null>(null);

export const useRadioGroupContext = () => {
  const value = React.useContext(RadioGroupContext);
  if (!value)
    throw new Error(
      'This component must be used within a <RadioGroup> component',
    );
  return value;
};

export const RadioGroupContextProvider: React.FC<
  React.PropsWithChildren<{ state: RadioGroupState }>
> = ({ state, children }) => {
  return (
    <RadioGroupContext.Provider value={state}>
      {children}
    </RadioGroupContext.Provider>
  );
};
