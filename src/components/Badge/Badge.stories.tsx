import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';
import { BadgeProps } from './Badge.types';

const meta = {
  title: 'Components/Communication/Badge',
  component: Badge,
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
    color: {
      description: "Badge's color",
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
      ] satisfies BadgeProps['color'][],
    },
    count: {
      description: "Badge's count",
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: {
          summary: 'undefined',
        },
      },
      type: 'number',
      control: 'number',
    },
    maxCount: {
      description: "Badge's max count",
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: {
          summary: '999',
        },
      },
      type: 'number',
      control: 'number',
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
    color: 'primary',
    count: undefined,
    maxCount: 999,
    asChild: false,
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const All: Story = {
  render: (args) => (
    <div className="flex flex-col items-center gap-xs">
      <div className="flex items-center gap-xs">
        <Badge {...args} color="primary" />
        <Badge {...args} color="secondary" />
        <Badge {...args} color="info" />
        <Badge {...args} color="success" />
        <Badge {...args} color="caution" />
        <Badge {...args} color="critical" />
      </div>
      <div className="flex items-center gap-xs">
        <Badge {...args} count={32} color="primary" />
        <Badge {...args} count={32} color="secondary" />
        <Badge {...args} count={32} color="info" />
        <Badge {...args} count={32} color="success" />
        <Badge {...args} count={32} color="caution" />
        <Badge {...args} count={32} color="critical" />
      </div>
      <div className="flex items-center gap-xs">
        <Badge {...args} count={999} color="primary" />
        <Badge {...args} count={999} color="secondary" />
        <Badge {...args} count={999} color="info" />
        <Badge {...args} count={999} color="success" />
        <Badge {...args} count={999} color="caution" />
        <Badge {...args} count={999} color="critical" />
      </div>
      <div className="flex items-center gap-xs">
        <Badge {...args} count={1000} color="primary" />
        <Badge {...args} count={1000} color="secondary" />
        <Badge {...args} count={1000} color="info" />
        <Badge {...args} count={1000} color="success" />
        <Badge {...args} count={1000} color="caution" />
        <Badge {...args} count={1000} color="critical" />
      </div>
    </div>
  ),
  parameters: {
    controls: {
      exclude: /color|count|maxCount/g,
    },
  },
};
