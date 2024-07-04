import React from 'react';
import { FieldProps } from './Field.types';

type FieldContextState = Pick<FieldProps, 'left' | 'right'>;

type FieldContext = [
  FieldContextState,
  React.Dispatch<React.SetStateAction<FieldContextState>>,
];

const Context = React.createContext<FieldContext>([
  {},
  () => {},
] as FieldContext);

export const FieldProvider: React.FC<
  React.PropsWithChildren<FieldContextState>
> = ({ children, ...initialState }) => {
  const [state, setState] = React.useState(initialState);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
};
FieldProvider.displayName = '@bruhabruh/ui/FieldProvider';

export const useFieldContext = () => {
  return React.useContext(Context);
};

export const FieldLeft: React.FC = () => {
  const [state] = useFieldContext();

  return state.left || <span aria-hidden="true" />;
};
FieldLeft.displayName = '@bruhabruh/ui/FieldLeft';

export const FieldRight: React.FC = () => {
  const [state] = useFieldContext();

  return state.right || <span aria-hidden="true" />;
};
FieldRight.displayName = '@bruhabruh/ui/FieldRight';
