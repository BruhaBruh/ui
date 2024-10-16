import { cn } from '@/utility';
import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';
import { DividerProps } from './Divider.types';

const meta: Meta<typeof Divider> = {
  title: 'Components/Containment/Divider',
  component: Divider,
  argTypes: {
    orientation: {
      description: "Divider's orientation",
      table: {
        type: { summary: 'horizontal | vertical' },
        defaultValue: {
          summary: 'horizontal',
        },
      },
      type: 'string',
      control: 'select',
      options: [
        'horizontal',
        'vertical',
      ] satisfies DividerProps['orientation'][],
    },
    inset: {
      description: "Divider's inset",
      type: 'boolean',
      control: 'boolean',
    },
    middleInset: {
      description: "Divider's middle inset",
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
    orientation: 'horizontal',
    inset: false,
    middleInset: false,
    asChild: false,
  },
  render: (args) => (
    <div
      className={cn(
        'grid auto-cols-max',
        args.orientation === 'vertical' ? 'grid-flow-col' : 'grid-flow-row',
      )}
    >
      <div className="px-md py-sm w-full">
        <h2 className="typography-title-medium">Some cell</h2>
        <p className="typography-body-medium">Description</p>
      </div>
      <Divider {...args} />
      <div className="px-md py-sm w-full">
        <h2 className="typography-title-medium">Some cell</h2>
        <p className="typography-body-medium">Description</p>
      </div>
      <Divider {...args} inset />
      <div className="px-md py-sm w-full">
        <h2 className="typography-title-medium">Some cell</h2>
        <p className="typography-body-medium">Description</p>
      </div>
      <Divider {...args} middleInset />
      <div className="px-md py-sm w-full">
        <h2 className="typography-title-medium">Some cell</h2>
        <p className="typography-body-medium">Description</p>
      </div>
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Playground: Story = {};

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
};
