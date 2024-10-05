'use client';

import React from 'react';
import { createPortal } from 'react-dom';
import { PortalProps } from './Portal.types';

export const Portal: React.FC<PortalProps> = ({ target, children }) => {
  return createPortal(children, target ?? document.body);
};
