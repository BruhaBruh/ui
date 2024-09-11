import React from 'react';
import { CheckboxGroupState } from 'react-stately';

export const CheckboxGroupContext = React.createContext<CheckboxGroupState>(
  null as unknown as CheckboxGroupState,
);
