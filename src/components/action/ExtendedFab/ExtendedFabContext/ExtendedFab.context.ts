import { createContext } from '@/utility';

export type ExtendedFabContextState = {
  icon?: React.ReactNode;
};

export const {
  Provider: ExtendedFabProvider,
  useStore: useExtendedFabContext,
  useSetStore: useSetExtendedFabContext,
} = createContext<ExtendedFabContextState>(
  {},
  {
    storeName: 'ExtendedFab',
  },
);
