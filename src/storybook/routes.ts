export type NavigationNode =
  | {
      type: 'label';
      text: React.ReactNode;
      icon?: React.ReactNode;
    }
  | {
      type: 'sublabel';
      text: React.ReactNode;
      icon?: React.ReactNode;
    }
  | {
      type: 'link';
      text: React.ReactNode;
      icon?: React.ReactNode;
      href: string;
    };

export const navigationRoutes: NavigationNode[] = [
  {
    type: 'label',
    text: 'Base',
  },
  {
    type: 'link',
    text: 'Palette',
    href: '/palette',
  },
  {
    type: 'link',
    text: 'Typography',
    href: '/typography',
  },
  {
    type: 'link',
    text: 'Radius',
    href: '/radius',
  },
  {
    type: 'link',
    text: 'Elevation',
    href: '/elevation',
  },
  {
    type: 'link',
    text: 'Easing',
    href: '/easing',
  },
  {
    type: 'link',
    text: 'Duration',
    href: '/duration',
  },
  {
    type: 'label',
    text: 'Components',
  },
  {
    type: 'sublabel',
    text: 'Actions',
  },
  {
    type: 'link',
    text: 'Button',
    href: '/actions/button',
  },
  {
    type: 'link',
    text: 'Fab',
    href: '/actions/fab',
  },
  {
    type: 'link',
    text: 'ExtendedFab',
    href: '/actions/extended-fab',
  },
];
