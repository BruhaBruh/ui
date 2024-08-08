import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Checkbox } from './Checkbox';

// @ts-ignore
const _: React.ReactNode = null;

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Controls/Checkbox',
  component: Checkbox,
  argTypes: {
    isDisabled: {
      table: {
        type: { summary: 'CheckboxProps[isDisabled]' },
        defaultValue: {
          summary: 'false',
        },
      },
      type: 'boolean',
      control: 'boolean',
    },
  },
  args: {
    children: <>Checkbox</>,
    isDisabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Playground: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col items-start gap-2">
      <Checkbox {...args} size="sm">
        Checkbox
      </Checkbox>
      <Checkbox {...args} isIndeterminate size="sm">
        Checkbox
      </Checkbox>
      <Checkbox {...args} isSelected size="sm">
        Checkbox
      </Checkbox>
      <Checkbox {...args} size="md">
        Checkbox
      </Checkbox>
      <Checkbox {...args} isIndeterminate size="md">
        Checkbox
      </Checkbox>
      <Checkbox {...args} isSelected size="md">
        Checkbox
      </Checkbox>
      <Checkbox {...args} size="lg">
        Checkbox
      </Checkbox>
      <Checkbox {...args} isIndeterminate size="lg">
        Checkbox
      </Checkbox>
      <Checkbox {...args} isSelected size="lg">
        Checkbox
      </Checkbox>

      <Checkbox {...args} isDisabled size="sm">
        Checkbox
      </Checkbox>
      <Checkbox {...args} isDisabled isIndeterminate size="sm">
        Checkbox
      </Checkbox>
      <Checkbox {...args} isDisabled isSelected size="sm">
        Checkbox
      </Checkbox>
      <Checkbox {...args} isDisabled size="md">
        Checkbox
      </Checkbox>
      <Checkbox {...args} isDisabled isIndeterminate size="md">
        Checkbox
      </Checkbox>
      <Checkbox {...args} isDisabled isSelected size="md">
        Checkbox
      </Checkbox>
      <Checkbox {...args} isDisabled size="lg">
        Checkbox
      </Checkbox>
      <Checkbox {...args} isDisabled isIndeterminate size="lg">
        Checkbox
      </Checkbox>
      <Checkbox {...args} isDisabled isSelected size="lg">
        Checkbox
      </Checkbox>
    </div>
  ),
  parameters: {
    controls: {
      exclude: /size/g,
    },
  },
};
