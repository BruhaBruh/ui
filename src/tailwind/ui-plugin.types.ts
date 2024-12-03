import { PluginAPI } from 'tailwindcss/types/config';
import { DebugScreensOptions } from './apply-functions';
import { GenerateThemeFileOptions } from './generate-theme-file';

export type UIPluginOptions = {
  variablePrefix: string;
  debugScreens: DebugScreensOptions;
  generate: GenerateThemeFileOptions;
};

export type ApplyUIPlugin = (api: PluginAPI, options: UIPluginOptions) => void;
