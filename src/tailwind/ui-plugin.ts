import plugin from 'tailwindcss/plugin';
import { PluginAPI } from 'tailwindcss/types/config';
import {
  applyDebugScreens,
  applyInteractions,
  applyMaterialDurations,
  applyMaterialEasings,
  applyMaterialElevations,
  applyMaterialRipple,
  applyMaterialState,
} from './apply-functions';
import { ApplyUIPlugin, UIPluginOptions } from './ui-plugin.types';

const applyPlugin = (api: PluginAPI, options: UIPluginOptions) => {
  const applyFunctions: ApplyUIPlugin[] = [
    applyDebugScreens,
    applyMaterialEasings,
    applyMaterialDurations,
    applyMaterialElevations,
    applyMaterialRipple,
    applyInteractions,
    applyMaterialState,
  ];

  applyFunctions.forEach((apply) => apply(api, options));
};

export const uiPlugin = plugin.withOptions<Partial<UIPluginOptions>>(
  (options) => {
    return (api) => {
      const modifiedAddVariant: typeof api.addVariant = (name, definition) => {
        const definitions: string[] = [];
        if (typeof definition === 'string') {
          definitions.push(definition);
        } else if (Array.isArray(definition)) {
          definition.forEach((def) => {
            if (typeof def === 'string') {
              definitions.push(def);
            } else {
              definitions.push(def());
            }
          });
        } else {
          definitions.push(definition());
        }

        api.matchVariant(
          name,
          (_, { modifier }) => {
            if (modifier === null) return definitions;
            return definitions.map((def) =>
              def
                .replace(/:merge\(\.group\)/g, `:merge(.group\\/${modifier})`)
                .replace(/:merge\(\.peer\)/g, `:merge(.peer\\/${modifier})`),
            );
          },
          {
            values: {
              DEFAULT: '',
            },
          },
        );
      };
      const uiAPI = {
        ...api,
        addVariant: modifiedAddVariant,
      };

      applyPlugin(uiAPI, {
        ...options,
        variablePrefix: options.variablePrefix || '--',
        debugScreens: {
          ...options.debugScreens,
        },
      });
    };
  },
);
