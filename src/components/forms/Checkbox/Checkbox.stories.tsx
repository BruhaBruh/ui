import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Checkbox } from './Checkbox';
import { CheckboxProps } from './Checkbox.types';
import { CheckboxGroup } from './CheckboxGroup';

// @ts-ignore
const _: React.ReactNode = null;

const colors = [
  'primary',
  'secondary',
  'info',
  'success',
  'caution',
  'critical',
] satisfies CheckboxProps['color'][];

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Forms/Checkbox',
  component: Checkbox,
  argTypes: {
    children: {
      table: {
        type: { summary: 'CheckboxProps[children]' },
        defaultValue: {
          summary: 'undefined',
        },
        control: 'text',
      },
    },
    color: {
      table: {
        type: { summary: 'CheckboxProps[color]' },
        defaultValue: {
          summary: 'primary',
        },
      },
      type: 'string',
      control: 'select',
      options: colors,
    },
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
    isIndeterminate: {
      table: {
        type: { summary: 'CheckboxProps[isIndeterminate]' },
        defaultValue: {
          summary: 'false',
        },
      },
      type: 'boolean',
      control: 'boolean',
    },
    isInvalid: {
      table: {
        type: { summary: 'CheckboxProps[isInvalid]' },
        defaultValue: {
          summary: 'false',
        },
      },
      type: 'boolean',
      control: 'boolean',
    },
    isSelected: {
      table: {
        type: { summary: 'CheckboxProps[isSelected]' },
        defaultValue: {
          summary: 'false',
        },
      },
      type: 'boolean',
      control: 'boolean',
    },
  },
  args: {
    children: 'Checkbox Label',
    color: 'primary',
    isSelected: false,
    isIndeterminate: false,
    isInvalid: false,
    isDisabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Playground: Story = {};

export const Colors: Story = {
  render: (args) => (
    <div className="flex flex-col gap-xs">
      <Checkbox {...args} color="primary" />
      <Checkbox {...args} color="secondary" />
      <Checkbox {...args} color="info" />
      <Checkbox {...args} color="success" />
      <Checkbox {...args} color="caution" />
      <Checkbox {...args} color="critical" />
      <Checkbox {...args} isDisabled />
    </div>
  ),
  parameters: {
    controls: {
      exclude: /color/g,
    },
  },
  args: {
    isSelected: true,
  },
};

export const Group: Story = {
  render: ({ color }) => (
    <CheckboxGroup label="Любимое животное">
      <CheckboxGroup.Item color={color} value="dog">
        Собака
      </CheckboxGroup.Item>
      <CheckboxGroup.Item color={color} value="cat" isIndeterminate>
        Кот
      </CheckboxGroup.Item>
      <CheckboxGroup.Item color={color} value="rat" isDisabled>
        Крыса
      </CheckboxGroup.Item>
    </CheckboxGroup>
  ),
};

export const GroupWithDescription: Story = {
  render: ({ color }) => (
    <CheckboxGroup
      label="Любимое животное"
      description="Кого вы больше любите?"
    >
      <CheckboxGroup.Item color={color} value="dog">
        Собака
      </CheckboxGroup.Item>
      <CheckboxGroup.Item color={color} value="cat" isIndeterminate>
        Кот
      </CheckboxGroup.Item>
      <CheckboxGroup.Item color={color} value="rat" isDisabled>
        Крыса
      </CheckboxGroup.Item>
    </CheckboxGroup>
  ),
};

export const GroupWithError: Story = {
  render: ({ color }) => (
    <CheckboxGroup label="Любимое животное" errorMessage="Вот ты крыса!">
      <CheckboxGroup.Item color={color} value="dog">
        Собака
      </CheckboxGroup.Item>
      <CheckboxGroup.Item color={color} value="cat" isIndeterminate>
        Кот
      </CheckboxGroup.Item>
      <CheckboxGroup.Item color={color} value="rat" isDisabled>
        Крыса
      </CheckboxGroup.Item>
    </CheckboxGroup>
  ),
};
