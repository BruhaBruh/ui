import { PluginAPI } from 'tailwindcss/types/config';

export const addMaterialEasings = ({ addUtilities }: PluginAPI) => {
  addUtilities({
    '.easing-emphasized': {
      'transition-timing-function': 'cubic-bezier(0.2, 0.0, 0, 1.0)',
    },
    '.easing-emphasized-decelerate': {
      'transition-timing-function': 'cubic-bezier(0.05, 0.7, 0.1, 1.0)',
    },
    '.easing-emphasized-accelerate': {
      'transition-timing-function': 'cubic-bezier(0.3, 0.0, 0.8, 0.15)',
    },
    '.easing-standard': {
      'transition-timing-function': 'cubic-bezier(0.2, 0.0, 0, 1.0)',
    },
    '.easing-standard-decelerate': {
      'transition-timing-function': 'cubic-bezier(0, 0, 0, 1)',
    },
    '.easing-standard-accelerate': {
      'transition-timing-function': 'cubic-bezier(0.3, 0, 1, 1)',
    },
  });
};
