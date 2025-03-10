import type { PluginAPI } from 'tailwindcss/types/config';
import type { DebugScreensOptions } from './apply-functions';

export type UIPluginOptions = {
  variablePrefix: string;
  debugScreens: DebugScreensOptions;
};

export type ApplyUIPlugin = (api: PluginAPI, options: UIPluginOptions) => void;
