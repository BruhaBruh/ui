import { PluginAPI } from 'tailwindcss/types/config';

export const addMaterialDurations = ({ addUtilities }: PluginAPI) => {
  addUtilities({
    '.duration-short-1': {
      'transition-duration': '50ms',
    },
    '.duration-short-2': {
      'transition-duration': '100ms',
    },
    '.duration-short-3': {
      'transition-duration': '150ms',
    },
    '.duration-short-4': {
      'transition-duration': '200ms',
    },
    '.duration-medium-1': {
      'transition-duration': '250ms',
    },
    '.duration-medium-2': {
      'transition-duration': '300ms',
    },
    '.duration-medium-3': {
      'transition-duration': '350ms',
    },
    '.duration-medium-4': {
      'transition-duration': '400ms',
    },
    '.duration-long-1': {
      'transition-duration': '450ms',
    },
    '.duration-long-2': {
      'transition-duration': '500ms',
    },
    '.duration-long-3': {
      'transition-duration': '550ms',
    },
    '.duration-long-4': {
      'transition-duration': '600ms',
    },
    '.duration-extra-long-1': {
      'transition-duration': '700ms',
    },
    '.duration-extra-long-2': {
      'transition-duration': '800ms',
    },
    '.duration-extra-long-3': {
      'transition-duration': '900ms',
    },
    '.duration-extra-long-4': {
      'transition-duration': '1000ms',
    },
  });
};
