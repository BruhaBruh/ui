import { addons } from '@storybook/manager-api';
import { theme } from './theme';

addons.register('bruhabruh/theme', (api) => {
  api.on('globalsUpdated', () => {
    const globals = api.getGlobals();
    const currentTheme = globals.theme;
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(currentTheme);
  });
});

addons.setConfig({
  theme,
});
