import type { Meta, StoryObj } from '@storybook/react';
import { IconSquare } from '@tabler/icons-react';
import { ExtendedFab } from './ExtendedFab';
import { ExtendedFabProps } from './ExtendedFab.types';

const meta = {
  title: 'Components/Action/ExtendedFab',
  component: ExtendedFab,
  argTypes: {
    children: {
      description: 'Child element. Only icons',
      table: {
        type: { summary: 'React.ReactNode' },
        defaultValue: {
          summary: 'undefined',
        },
      },
      control: 'text',
    },
    color: {
      description: "ExtendedFab's color",
      table: {
        type: {
          summary:
            'surface | primary | secondary | info | success | caution | critical',
        },
        defaultValue: {
          summary: 'surface',
        },
      },
      type: 'string',
      control: 'select',
      options: [
        'surface',
        'primary',
        'secondary',
        'info',
        'success',
        'caution',
        'critical',
      ] satisfies ExtendedFabProps['color'][],
    },
    lowered: {
      description: "ExtendedFab's lowered state",
      table: {
        type: { summary: 'true | false' },
        defaultValue: {
          summary: 'false',
        },
      },
      type: 'boolean',
      control: 'boolean',
    },
    asFab: {
      description: 'Pass `true` to render as Fab component',
      table: {
        type: { summary: 'true | false' },
        defaultValue: {
          summary: 'false',
        },
      },
      type: 'boolean',
      control: 'boolean',
    },
    asChild: {
      description: 'Pass `true` to render as a child element',
      table: {
        type: { summary: 'true | false' },
        defaultValue: {
          summary: 'false',
        },
      },
      type: 'boolean',
      control: 'boolean',
    },
  },
  args: {
    children: 'Extended FAB',
    color: 'primary',
    lowered: false,
    asFab: false,
    asChild: false,
  },
} satisfies Meta<typeof ExtendedFab>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Colors: Story = {
  render: (args) => (
    <div className="flex max-w-screen-sm flex-wrap items-center justify-center gap-xs">
      <ExtendedFab {...args} color="surface" />
      <ExtendedFab {...args} color="primary" />
      <ExtendedFab {...args} color="secondary" />
      <ExtendedFab {...args} color="info" />
      <ExtendedFab {...args} color="success" />
      <ExtendedFab {...args} color="caution" />
      <ExtendedFab {...args} color="critical" />
    </div>
  ),
  parameters: {
    controls: {
      exclude: /color|asFab/g,
    },
  },
};

export const WithIcon: Story = {
  render: ({ children, ...args }) => (
    <ExtendedFab {...args}>
      <ExtendedFab.Icon>
        <IconSquare />
      </ExtendedFab.Icon>
      {children}
    </ExtendedFab>
  ),
};
