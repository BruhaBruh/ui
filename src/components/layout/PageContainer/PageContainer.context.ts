import { createContext } from '@/utility';
import React from 'react';

type State = {
  isZoomed: boolean;
};

const { Provider, useStore } = createContext<State>({
  isZoomed: false,
});

export const PageContainerProvider = Provider;

export const usePageContainerIsZoomed = () => {
  const [isZoomed, setState] = useStore((s) => s.isZoomed);

  const setIsZoomed = React.useCallback(
    (state: boolean) => {
      setState({ isZoomed: state });
    },
    [setState],
  );

  return [isZoomed, setIsZoomed] as const;
};
