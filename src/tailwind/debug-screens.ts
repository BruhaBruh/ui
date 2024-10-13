import { PluginAPI } from 'tailwindcss/types/config';

type Position = 'top' | 'left' | 'right' | 'bottom';

export type DebugScreensOptions = Partial<{
  selector: string;
  prefix: string;
  ignore: string[];
  position: [Position, Position];
  userStyles: Record<string, string>;
}>;

// px-xs py-2xs after:content-['none'] sm:after:content-['sm'] md:after:content-['md'] lg:after:content-['lg'] xl:after:content-['xl'] 2xl:after:content-['2xl']
export const addDebugScreens = (
  {
    selector = '.debug-screens',
    prefix = 'screen: ',
    ignore = [],
    position = ['bottom', 'right'],
    userStyles = {},
  }: DebugScreensOptions,
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
        padding: 'var(--ui-spacing-2xs) var(--ui-spacing-xs)',
        background: 'var(--ui-color-inverse-surface)',
        color: 'var(--ui-color-inverse-on-surface)',
        fontFamily: 'var(--ui-font-family-sans)',
        fontSize: 'var(--ui-font-size-label-small)',
        fontWeight: '500',
        lineHeight: 'var(--ui-line-height-label-small)',
        letterSpacing: 'var(--ui-letter-spacing-label-small)',
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
