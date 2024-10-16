import React from 'react';
import { useSetSegmentedButtonContext } from '../SegmentedButtonContext/SegmentedButton.context';

export const SegmentedButtonSelectedIcon: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const setContext = useSetSegmentedButtonContext();

  React.useEffect(() => {
    setContext((p) => ({
      ...p,
      selectedIcon: children,
    }));
  }, [children, setContext]);

  return null;
};
