import { createContext } from '@/utility';
import React from 'react';

export type ButtonContextState = {
  left?: React.ReactNode;
  right?: React.ReactNode;
};

export const {
  Provider: ButtonProvider,
  useStoreValue: useButtonContext,
  useSetStore: useSetButtonContext,
} = createContext<ButtonContextState>(
  {},
  {
    storeName: 'Button',
  },
);
