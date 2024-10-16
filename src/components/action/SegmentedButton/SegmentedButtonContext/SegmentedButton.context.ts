import { createContext } from '@/utility';

export type SegmentedButtonContextState = {
  selectedIcon?: React.ReactNode;
};

export const {
  ProviderWithDepend: SegmentedButtonProvider,
  useStore: useSegmentedButtonContext,
  useSetStore: useSetSegmentedButtonContext,
} = createContext<SegmentedButtonContextState>(
  {},
  {
    storeName: 'SegmentedButton',
  },
);
