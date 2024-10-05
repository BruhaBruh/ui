import type { Meta, StoryObj } from '@storybook/react';
import { IconSquare } from '@tabler/icons-react';
import { Fab } from './Fab';
import { FabProps } from './Fab.types';

const meta = {
  title: 'Components/Actions/Fab',
  component: Fab,
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
    size: {
      description: "Fab's size",
      table: {
        type: {
          summary: 'sm | md | lg',
        },
        defaultValue: {
          summary: 'md',
        },
      },
      type: 'string',
      control: 'select',
      options: ['sm', 'md', 'lg'] satisfies FabProps['size'][],
    },
    color: {
      description: "Fab's color",
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
      ] satisfies FabProps['color'][],
    },
    lowered: {
      description: "Fab's lowered state",
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
    children: <IconSquare />,
    size: 'md',
    color: 'primary',
    lowered: false,
    asChild: false,
  },
} satisfies Meta<typeof Fab>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Colors: Story = {
  render: (args) => (
    <div className="flex max-w-screen-sm flex-wrap items-center justify-center gap-xs">
      <Fab {...args} color="surface" />
      <Fab {...args} color="primary" />
      <Fab {...args} color="secondary" />
      <Fab {...args} color="info" />
      <Fab {...args} color="success" />
      <Fab {...args} color="caution" />
      <Fab {...args} color="critical" />
    </div>
  ),
  parameters: {
    controls: {
      exclude: /color/g,
    },
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex max-w-screen-sm flex-wrap items-center justify-center gap-xs">
      <Fab {...args} size="sm" />
      <Fab {...args} size="md" />
      <Fab {...args} size="lg" />
    </div>
  ),
  parameters: {
    controls: {
      exclude: /size/g,
    },
  },
};
