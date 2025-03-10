import type { ContextState } from '@/types';
import React from 'react';

export type FieldContextState = ContextState<{
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}>;

const FieldContext = React.createContext<FieldContextState | null>(null);

export const useFieldContext = () => {
  const value = React.useContext(FieldContext);
  if (!value)
    throw new Error('This component must be used within a <Field> component');
  return value;
};

export const FieldContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const state = React.useState<FieldContextState[0]>({});

  return (
    <FieldContext.Provider value={state}>{children}</FieldContext.Provider>
  );
};
