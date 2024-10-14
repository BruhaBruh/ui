import type { Meta, StoryObj } from '@storybook/react';
import { IconSquare } from '@tabler/icons-react';
import { ExtendedFab } from './ExtendedFab';
import { ExtendedFabProps } from './ExtendedFab.types';

const meta = {
  title: 'Components/Actions/ExtendedFab',
  component: ExtendedFab,
  argTypes: {
    children: {
      description: 'Child element. Only icons',
      table: {
        type: { summary: 'React.ReactNode' },
        defaultValue: {
          summary: 'undefined',
        },
        control: 'text',
      },
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
    icon: {
      description: "ExtendedFab's icon",
      table: {
        type: { summary: 'React.ReactNode' },
        defaultValue: {
          summary: 'undefined',
        },
      },
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
    asChild: false,
  },
} satisfies Meta<typeof ExtendedFab>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Colors: Story = {
  render: (args) => (
    <div className="gap-xs flex max-w-screen-sm flex-wrap items-center justify-center">
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
      exclude: /color/g,
    },
  },
};

export const WithIcon: Story = {
  args: {
    icon: <IconSquare />,
  },
  parameters: {
    controls: {
      exclude: /icon/g,
    },
  },
};
