import { PluginAPI } from 'tailwindcss/types/config';
import { DebugScreensOptions, addDebugScreens } from './debug-screens';
import { addMaterialDurations } from './material-durations';
import { addMaterialEasings } from './material-easings';
import { addMaterialElevations } from './material-elevations';

const addMaterialVariants = ({ addVariant }: PluginAPI) => {
  addVariant('string', ['&:before', '&:after']);
  addVariant('state', '&:before');
  addVariant('ring', '&:after');
};

export type UIPluginOptions = Partial<{
  variablePrefix: string;
  debugScreens: DebugScreensOptions;
}>;

export const uiPlugin =
  (options: UIPluginOptions = {}) =>
  (api: PluginAPI) => {
    const variablePrefix = options.variablePrefix || '--ui-';
    addDebugScreens(variablePrefix, options.debugScreens, api);
    addMaterialVariants(api);
    addMaterialElevations(api);
    addMaterialEasings(api);
    addMaterialDurations(api);
  };
