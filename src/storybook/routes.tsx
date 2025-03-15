import {
  IconBorderRadius,
  IconBroadcast,
  IconComponents,
  IconEaseInOut,
  IconForms,
  IconHandFinger,
  IconNavigation,
  IconPalette,
  IconShadow,
  IconSquare,
  IconSquareCheck,
  IconTimeDuration30,
  IconTypography,
} from '@tabler/icons-react';
import type { NavigationNode } from './components';
import {
  BadgePage,
  ButtonPage,
  CarouselPage,
  CheckboxPage,
  ContainerPage,
  DialogPage,
  DividerPage,
  DurationPage,
  EasingPage,
  ElevationPage,
  ExtendedFabPage,
  FabPage,
  IconButtonPage,
  MenuPage,
  ModalPage,
  NumberFieldPage,
  PalettePage,
  PopoverPage,
  RadioPage,
  RadiusPage,
  SegmentedButtonButtonPage,
  SliderPage,
  SwitchPage,
  TextAreaFieldPage,
  TextFieldPage,
  TooltipPage,
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
          {
            type: 'page',
            text: 'SegmentedButton',
            href: '/segmented-button',
            page: <SegmentedButtonButtonPage />,
          },
        ],
      },
      {
        type: 'folder',
        text: 'Communications',
        href: '/communications',
        icon: <IconBroadcast />,
        children: [
          {
            type: 'page',
            text: 'Badge',
            href: '/badge',
            page: <BadgePage />,
          },
          {
            type: 'page',
            text: 'Tooltip',
            href: '/tooltip',
            page: <TooltipPage />,
          },
        ],
      },
      {
        type: 'folder',
        text: 'Containments',
        href: '/contaiments',
        icon: <IconSquare />,
        children: [
          {
            type: 'page',
            text: 'Divider',
            href: '/divider',
            page: <DividerPage />,
          },
          {
            type: 'page',
            text: 'Modal',
            href: '/modal',
            page: <ModalPage />,
          },
          {
            type: 'page',
            text: 'Dialog',
            href: '/dialog',
            page: <DialogPage />,
          },
          {
            type: 'page',
            text: 'Popover',
            href: '/popover',
            page: <PopoverPage />,
          },
          {
            type: 'page',
            text: 'Container',
            href: '/container',
            page: <ContainerPage />,
          },
          {
            type: 'page',
            text: 'Carousel',
            href: '/carousel',
            page: <CarouselPage />,
          },
        ],
      },
      {
        type: 'folder',
        text: 'Navigations',
        href: '/navigations',
        icon: <IconNavigation />,
        children: [],
      },
      {
        type: 'folder',
        text: 'Selections',
        href: '/selections',
        icon: <IconSquareCheck />,
        children: [
          {
            type: 'page',
            text: 'Checkbox',
            href: '/checkbox',
            page: <CheckboxPage />,
          },
          {
            type: 'page',
            text: 'Radio',
            href: '/radio',
            page: <RadioPage />,
          },
          {
            type: 'page',
            text: 'Switch',
            href: '/switch',
            page: <SwitchPage />,
          },
          {
            type: 'page',
            text: 'Slider',
            href: '/slider',
            page: <SliderPage />,
          },
          {
            type: 'page',
            text: 'Menu',
            href: '/menu',
            page: <MenuPage />,
          },
        ],
      },
      {
        type: 'folder',
        text: 'Inputs',
        href: '/inputs',
        icon: <IconForms />,
        children: [
          {
            type: 'page',
            text: 'TextField',
            href: '/text-field',
            page: <TextFieldPage />,
          },
          {
            type: 'page',
            text: 'TextAreaField',
            href: '/text-area-field',
            page: <TextAreaFieldPage />,
          },
          {
            type: 'page',
            text: 'NumberField',
            href: '/number-field',
            page: <NumberFieldPage />,
          },
        ],
      },
    ],
  },
];
