import { createContext } from '@/utility';

export type ButtonContextState = {
  left?: React.ReactNode;
  right?: React.ReactNode;
};

export const {
  Provider: ButtonProvider,
  useStore: useButtonContext,
  useSetStore: useSetButtonContext,
} = createContext<ButtonContextState>(
  {},
  {
    storeName: 'Button',
  },
);
