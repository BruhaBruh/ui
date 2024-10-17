import plugin from 'tailwindcss/plugin';
import { PluginAPI } from 'tailwindcss/types/config';
import {
  applyDebugScreens,
  applyMaterialDurations,
  applyMaterialEasings,
  applyMaterialElevations,
  applyMaterialVariants,
  applyRotate,
  applyScale,
  applyTransition,
  applyTranslate,
  applyVariable,
} from './apply-functions';
import { ApplyUIPlugin, UIPluginOptions } from './ui-plugin.types';

const applyPlugin = (api: PluginAPI, options: UIPluginOptions) => {
  const applyFunctions: ApplyUIPlugin[] = [
    applyScale,
    applyRotate,
    applyTranslate,
    applyTransition,
    applyVariable,
    applyDebugScreens,
    applyMaterialVariants,
    applyMaterialEasings,
    applyMaterialDurations,
    applyMaterialElevations,
  ];

  applyFunctions.forEach((apply) => apply(api, options));
};

export const uiPlugin = plugin.withOptions<Partial<UIPluginOptions>>(
  (options) => {
    return (api) => {
      applyPlugin(api, {
        ...options,
        variablePrefix: options.variablePrefix || '--ui-',
        debugScreens: {
          ...options.debugScreens,
        },
      });
    };
  },
);
