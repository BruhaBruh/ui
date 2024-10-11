import type { Meta, StoryObj } from '@storybook/react';
import { CircularProgress } from './CircularProgress';
import { CircularProgressProps } from './CircularProgress.types';

const meta = {
  title: 'Components/Communication/CircularProgress',
  component: CircularProgress,
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
      description: "CircularProgress's value between min value and max value",
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
      description: "CircularProgress's min value",
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
      description: "CircularProgress's max value",
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
      description: "CircularProgress's indeterminate state",
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
        "CircularProgress's easeInOut animation state of indeterminate state",
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
      description: "CircularProgress's color",
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
      ] satisfies CircularProgressProps['color'][],
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
    'aria-label': 'circular progress demo',
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
      exclude: /aria-label|children/g,
    },
  },
} satisfies Meta<typeof CircularProgress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Colors: Story = {
  render: (args) => (
    <div className="flex flex-col items-center justify-center gap-xs">
      <CircularProgress {...args} color="current" />
      <CircularProgress {...args} color="primary" />
      <CircularProgress {...args} color="secondary" />
      <CircularProgress {...args} color="info" />
      <CircularProgress {...args} color="success" />
      <CircularProgress {...args} color="caution" />
      <CircularProgress {...args} color="critical" />
    </div>
  ),
  parameters: {
    controls: {
      exclude: /aria-label|children|color/g,
    },
  },
};
export const States: Story = {
  render: (args) => (
    <div className="flex flex-col items-center justify-center gap-xs">
      <CircularProgress {...args} />
      <CircularProgress {...args} isIndeterminate />
    </div>
  ),
  parameters: {
    controls: {
      exclude: /aria-label|children|isIndeterminate/g,
    },
  },
};
