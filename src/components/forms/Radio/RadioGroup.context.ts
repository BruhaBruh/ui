import React from 'react';
import { RadioGroupState } from 'react-stately';

export const RadioGroupContext = React.createContext<RadioGroupState>(
  null as unknown as RadioGroupState,
);
