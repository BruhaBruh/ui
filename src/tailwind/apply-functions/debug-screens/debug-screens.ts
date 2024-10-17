import { ApplyUIPlugin } from '../../ui-plugin.types';

export const applyDebugScreens: ApplyUIPlugin = (
  { addComponents, theme },
  {
    variablePrefix,
    debugScreens: {
      selector = '.debug-screens',
      prefix = 'screen: ',
      ignore = [],
      position = ['bottom', 'right'],
      userStyles = {},
    },
  },
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
