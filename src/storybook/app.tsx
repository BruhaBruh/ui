import { materialDuration, materialEasing } from '@/config';
import { MotionConfig } from 'motion/react';
import React, { Suspense } from 'react';
import { NavigationNode, NavigationProvider } from './components';
import { Storybook } from './storybook';

const navigationTree: NavigationNode[] = [
  {
    type: 'folder',
    text: 'Base',
    href: '/base',
    children: [
      {
        type: 'page',
        text: 'Palette',
        href: '/palette',
      },
      {
        type: 'page',
        text: 'Typography',
        href: '/typography',
      },
      {
        type: 'page',
        text: 'Radius',
        href: '/radius',
      },
      {
        type: 'page',
        text: 'Elevation',
        href: '/elevation',
      },
      {
        type: 'page',
        text: 'Easing',
        href: '/easing',
      },
      {
        type: 'page',
        text: 'Duration',
        href: '/duration',
      },
    ],
  },
  {
    type: 'folder',
    text: 'Components',
    href: '/components',
    children: [
      {
        type: 'folder',
        text: 'Actions',
        href: '/actions',
        children: [
          {
            type: 'page',
            text: 'Button',
            href: '/button',
          },
          {
            type: 'page',
            text: 'IconButton',
            href: '/icon-button',
          },
          {
            type: 'page',
            text: 'Fab',
            href: '/fab',
          },
          {
            type: 'page',
            text: 'ExtendedFab',
            href: '/extended-fab',
          },
        ],
      },
    ],
  },
];

export const App: React.FC = () => {
  return (
    <Suspense fallback={<></>}>
      <MotionConfig
        transition={{
          duration: materialDuration.asMotion('medium-1'),
          ease: materialEasing['standard'],
        }}
      >
        <NavigationProvider value={navigationTree}>
          <Storybook />
        </NavigationProvider>
      </MotionConfig>
    </Suspense>
  );
};
