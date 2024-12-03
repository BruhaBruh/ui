import fs from 'fs';
import path from 'path';
import resolveConfig from 'tailwindcss/resolveConfig';
import { PluginAPI } from 'tailwindcss/types/config';

export type GenerateThemeFileOptions = {
  output?: string;
};

export const generateThemeFile = (
  { config }: PluginAPI,
  { output }: GenerateThemeFileOptions = {},
) => {
  if (!output) return;

  const fullConfig = resolveConfig(config());

  const json = JSON.stringify(fullConfig.theme, null, 2);

  const fileData = `
// Generated theme for TailwindCSS ${Date.now()}
export const tailwindTheme = ${json} as const;

`;

  const outputPath = path.resolve(process.cwd(), output);

  fs.writeFileSync(outputPath, fileData);
};
