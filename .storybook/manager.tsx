import { IconButton } from '@storybook/components';
import { FORCE_RE_RENDER } from '@storybook/core-events';
import { BrowserIcon } from '@storybook/icons';
import { addons, types, useGlobals } from '@storybook/manager-api';
import React from 'react';
import { theme } from './theme';

const DebugScreensToolbar: React.FC = () => {
  const [globals, updateGlobals] = useGlobals();
  const isActive = globals.debugScreens || false;

  const refreshAndUpdateGlobal = () => {
    updateGlobals({
      debugScreens: !isActive,
    });
    addons.getChannel().emit(FORCE_RE_RENDER);
  };

  return (
    <IconButton
      key="DebugScreens"
      active={isActive}
      title="Debug TailwindCSS Screens"
      onClick={refreshAndUpdateGlobal}
    >
      <BrowserIcon />
      <span>{isActive ? 'Enabled' : 'Disabled'}</span>
    </IconButton>
  );
};

addons.register('ui', (api) => {
  api.on('globalsUpdated', () => {
    const globals = api.getGlobals();
    const currentTheme = globals.theme;
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(currentTheme);
  });

  addons.add('ui/debug-screens', {
    title: 'Debug Screens toolbar',
    //👇 Sets the type of UI element in Storybook
    type: types.TOOL,
    //👇 Shows the Toolbar UI element if the story canvas is being viewed
    match: ({ tabId, viewMode }) => !tabId && viewMode === 'story',
    render: DebugScreensToolbar,
  });
});

addons.setConfig({
  theme,
});
