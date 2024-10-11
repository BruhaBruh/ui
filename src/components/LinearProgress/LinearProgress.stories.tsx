import type { Meta, StoryObj } from '@storybook/react';
import { LinearProgress } from './LinearProgress';
import { LinearProgressProps } from './LinearProgress.types';

const meta = {
  title: 'Components/Communication/LinearProgress',
  component: LinearProgress,
  argTypes: {
    children: {
      description: 'Child element',
      table: {
        type: { summary: 'React.ReactNode' },
        defaultValue: {
          summary: 'undefined',
        },
        control: 'text',
      },
    },
    value: {
      description: "LinearProgress's value between min value and max value",
      table: {
        type: { summary: 'number' },
        defaultValue: {
          summary: '0',
        },
        control: 'number',
      },
      type: 'number',
      control: 'number',
    },
    minValue: {
      description: "LinearProgress's min value",
      table: {
        type: { summary: 'number' },
        defaultValue: {
          summary: '0',
        },
        control: 'number',
      },
      type: 'number',
      control: 'number',
    },
    maxValue: {
      description: "LinearProgress's max value",
      table: {
        type: { summary: 'number' },
        defaultValue: {
          summary: '100',
        },
        control: 'number',
      },
      type: 'number',
      control: 'number',
    },
    isIndeterminate: {
      description: "LinearProgress's indeterminate state",
      table: {
        type: { summary: 'true | false' },
        defaultValue: {
          summary: 'false',
        },
      },
      type: 'boolean',
      control: 'boolean',
    },
    easeInOut: {
      description:
        "LinearProgress's easeInOut animation state of indeterminate state",
      table: {
        type: { summary: 'true | false' },
        defaultValue: {
          summary: 'false',
        },
      },
      type: 'boolean',
      control: 'boolean',
    },
    color: {
      description: "LinearProgress's color",
      table: {
        type: {
          summary: 'primary | secondary | info | success | caution | critical',
        },
        defaultValue: {
          summary: 'primary',
        },
      },
      type: 'string',
      control: 'select',
      options: [
        'primary',
        'secondary',
        'info',
        'success',
        'caution',
        'critical',
      ] satisfies LinearProgressProps['color'][],
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
    'aria-label': 'linear progress demo',
    className: 'w-96',
    color: 'primary',
    isIndeterminate: false,
    easeInOut: false,
    value: 75,
    minValue: 0,
    maxValue: 100,
    asChild: false,
    children: <section />,
  },
  parameters: {
    controls: {
      exclude: /aria-label|className|children/g,
    },
  },
} satisfies Meta<typeof LinearProgress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Colors: Story = {
  render: (args) => (
    <div className="flex flex-col items-center justify-center gap-xs">
      <LinearProgress {...args} color="current" />
      <LinearProgress {...args} color="primary" />
      <LinearProgress {...args} color="secondary" />
      <LinearProgress {...args} color="info" />
      <LinearProgress {...args} color="success" />
      <LinearProgress {...args} color="caution" />
      <LinearProgress {...args} color="critical" />
    </div>
  ),
  parameters: {
    controls: {
      exclude: /aria-label|className|children|color/g,
    },
  },
};
export const States: Story = {
  render: (args) => (
    <div className="flex flex-col items-center justify-center gap-xs">
      <LinearProgress {...args} />
      <LinearProgress {...args} isIndeterminate />
    </div>
  ),
  parameters: {
    controls: {
      exclude: /aria-label|className|children|isIndeterminate/g,
    },
  },
};
