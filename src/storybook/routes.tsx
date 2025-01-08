import {
  IconBorderRadius,
  IconComponents,
  IconEaseInOut,
  IconHandFinger,
  IconPalette,
  IconShadow,
  IconTimeDuration30,
  IconTypography,
} from '@tabler/icons-react';
import { NavigationNode } from './components';
import {
  ButtonPage,
  DurationPage,
  EasingPage,
  ElevationPage,
  ExtendedFabPage,
  FabPage,
  IconButtonPage,
  PalettePage,
  RadiusPage,
  TypographyPage,
} from './pages';

export const routes: NavigationNode[] = [
  {
    type: 'folder',
    text: 'Base',
    href: '/base',
    children: [
      {
        type: 'page',
        text: 'Palette',
        href: '/palette',
        icon: <IconPalette />,
        page: <PalettePage />,
      },
      {
        type: 'page',
        text: 'Typography',
        href: '/typography',
        icon: <IconTypography />,
        page: <TypographyPage />,
      },
      {
        type: 'page',
        text: 'Radius',
        href: '/radius',
        icon: <IconBorderRadius />,
        page: <RadiusPage />,
      },
      {
        type: 'page',
        text: 'Elevation',
        href: '/elevation',
        icon: <IconShadow />,
        page: <ElevationPage />,
      },
      {
        type: 'page',
        text: 'Easing',
        href: '/easing',
        icon: <IconEaseInOut />,
        page: <EasingPage />,
      },
      {
        type: 'page',
        text: 'Duration',
        href: '/duration',
        icon: <IconTimeDuration30 />,
        page: <DurationPage />,
      },
    ],
  },
  {
    type: 'folder',
    text: 'Components',
    href: '/components',
    icon: <IconComponents />,
    children: [
      {
        type: 'folder',
        text: 'Actions',
        href: '/actions',
        icon: <IconHandFinger />,
        children: [
          {
            type: 'page',
            text: 'Button',
            href: '/button',
            page: <ButtonPage />,
          },
          {
            type: 'page',
            text: 'IconButton',
            href: '/icon-button',
            page: <IconButtonPage />,
          },
          {
            type: 'page',
            text: 'Fab',
            href: '/fab',
            page: <FabPage />,
          },
          {
            type: 'page',
            text: 'ExtendedFab',
            href: '/extended-fab',
            page: <ExtendedFabPage />,
          },
        ],
      },
    ],
  },
];
