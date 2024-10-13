import { PluginAPI } from 'tailwindcss/types/config';
import { DebugScreensOptions, addDebugScreens } from './debug-screens';
import { addMaterialDurations } from './material-durations';
import { addMaterialElevations } from './material-elevations';

const addMaterialVariants = ({ addVariant }: PluginAPI) => {
  addVariant('string', ['&:before', '&:after']);
  addVariant('state', '&:before');
  addVariant('ring', '&:after');
};

export type UIPluginOptions = { debugScreens: DebugScreensOptions };

export const uiPlugin =
  (
    options: UIPluginOptions = {
      debugScreens: {},
    },
  ) =>
  (api: PluginAPI) => {
    addDebugScreens(options.debugScreens, api);
    addMaterialVariants(api);
    addMaterialElevations(api);
    addMaterialDurations(api);
  };
