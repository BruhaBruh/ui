import { materialDuration, materialEasing } from '@/config';
import { MotionConfig } from 'motion/react';
import React, { Suspense } from 'react';
import { NavigationProvider } from './components';
import { routes } from './routes';
import { Storybook } from './storybook';

export const App: React.FC = () => {
  return (
    <Suspense fallback={<></>}>
      <MotionConfig
        transition={{
          duration: materialDuration.asMotion('medium-1'),
          ease: materialEasing['standard'],
        }}
      >
        <NavigationProvider value={routes}>
          <Storybook />
        </NavigationProvider>
      </MotionConfig>
    </Suspense>
  );
};
