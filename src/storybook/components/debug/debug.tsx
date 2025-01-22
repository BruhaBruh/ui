import React from 'react';
import { DebugFPS } from './debug-fps';
import { DebugScreens } from './debug-screens';

export const Debug: React.FC = () => {
  return (
    <>
      <DebugFPS />
      <DebugScreens />
    </>
  );
};
