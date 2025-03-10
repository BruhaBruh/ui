import React from 'react';
import { createPortal } from 'react-dom';
import type { PortalProps } from './portal.types';

export const Portal: React.FC<PortalProps> = ({ children, container }) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return createPortal(children, container ?? document.body);
};
