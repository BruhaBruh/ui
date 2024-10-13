import { PluginAPI } from 'tailwindcss/types/config';

type Position = 'top' | 'left' | 'right' | 'bottom';

export type DebugScreensOptions = Partial<{
  selector: string;
  prefix: string;
  ignore: string[];
  position: [Position, Position];
  userStyles: Record<string, string>;
}>;

export const addDebugScreens = (
  variablePrefix: string,
  {
    selector = '.debug-screens',
    prefix = 'screen: ',
    ignore = [],
    position = ['bottom', 'right'],
    userStyles = {},
  }: DebugScreensOptions = {},
  { addComponents, theme }: PluginAPI,
) => {
  const screens = theme('screens') as Record<string, unknown>;

  const components: Record<
    string,
    Record<string, string | Record<string, string>>
  > = {
    [`${selector}:before`]: Object.assign(
      {
        zIndex: '2147483647',
        position: 'fixed',
        [position[0]]: '0',
        [position[1]]: '0',
        padding: `var(${variablePrefix}spacing-2xs) var(--ui-spacing-xs)`,
        background: `var(${variablePrefix}color-inverse-surface)`,
        color: `var(${variablePrefix}color-inverse-on-surface)`,
        fontFamily: `var(${variablePrefix}font-family-sans)`,
        fontSize: `var(${variablePrefix}font-size-label-small)`,
        fontWeight: '500',
        lineHeight: `var(${variablePrefix}line-height-label-small)`,
        letterSpacing: `var(${variablePrefix}letter-spacing-label-small)`,
        content: `"${prefix}none"`,
      },
      userStyles,
    ),
  };

  Object.entries(screens)
    .filter(([screen]) => !ignore.includes(screen))
    .forEach(([screen]) => {
      components[`@screen ${screen}`] = {
        [`${selector}:before`]: {
          content: `"${prefix}${screen}"`,
        },
      };
    });

  addComponents(components);
};
