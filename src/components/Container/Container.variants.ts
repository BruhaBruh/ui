import { cva } from 'class-variance-authority';

export const containerWrapperVariants = cva(['group'], {
  variants: {
    color: {
      surfaceContainerLowest: ['bg-surface-container-lowest text-on-surface'],
      surfaceContainerLow: ['bg-surface-container-low text-on-surface'],
      surfaceContainer: ['bg-surface-container text-on-surface'],
      surfaceContainerHigh: ['bg-surface-container-high text-on-surface'],
      surfaceContainerHighest: ['bg-surface-container-highest text-on-surface'],
      primary: ['bg-primary text-on-primary'],
      primaryContainer: ['bg-primary-container text-on-primary-container'],
      secondary: ['bg-secondary text-on-secondary'],
      secondaryContainer: [
        'bg-secondary-container text-on-secondary-container',
      ],
      info: ['bg-info text-on-info'],
      infoContainer: ['bg-info-container text-on-info-container'],
      success: ['bg-success text-on-success'],
      successContainer: ['bg-success-container text-on-success-container'],
      caution: ['bg-caution text-on-caution'],
      cautionContainer: ['bg-caution-container text-on-caution-container'],
      critical: ['bg-critical text-on-critical'],
      criticalContainer: ['bg-critical-container text-on-critical-container'],
      none: [],
    },
  },
  defaultVariants: {
    color: 'none',
  },
});

export const containerVariants = cva([
  'container',
  'group-data-[fluid=true]:max-w-none',
]);
