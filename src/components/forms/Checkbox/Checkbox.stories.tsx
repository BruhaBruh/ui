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
  'brand',
  'brandSubdued',
  'info',
  'infoSubdued',
  'success',
  'successSubdued',
  'caution',
  'cautionSubdued',
  'critical',
  'criticalSubdued',
] satisfies CheckboxProps['color'][];

const sizes = ['sm', 'md', 'lg'] satisfies CheckboxProps['size'][];

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
        type: { summary: 'ButtonProps[color]' },
        defaultValue: {
          summary: 'primary',
        },
      },
      type: 'string',
      control: 'select',
      options: colors,
    },
    size: {
      table: {
        type: { summary: 'ButtonProps[size]' },
        defaultValue: {
          summary: 'md',
        },
      },
      type: 'string',
      control: 'select',
      options: sizes,
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
    size: 'md',
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
      <Checkbox {...args} color="brand" />
      <Checkbox {...args} color="brandSubdued" />
      <Checkbox {...args} color="info" />
      <Checkbox {...args} color="infoSubdued" />
      <Checkbox {...args} color="success" />
      <Checkbox {...args} color="successSubdued" />
      <Checkbox {...args} color="caution" />
      <Checkbox {...args} color="cautionSubdued" />
      <Checkbox {...args} color="critical" />
      <Checkbox {...args} color="criticalSubdued" />
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

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col items-center gap-xs">
      <Checkbox {...args} size="sm" />
      <Checkbox {...args} size="md" />
      <Checkbox {...args} size="lg" />
    </div>
  ),
  parameters: {
    controls: {
      exclude: /size/g,
    },
  },
};

export const Group: Story = {
  render: ({ color, size }) => (
    <CheckboxGroup size={size} label="Любимое животное">
      <CheckboxGroup.Item color={color} size={size} value="dog">
        Собака
      </CheckboxGroup.Item>
      <CheckboxGroup.Item color={color} size={size} value="cat" isIndeterminate>
        Кот
      </CheckboxGroup.Item>
      <CheckboxGroup.Item color={color} size={size} value="rat" isDisabled>
        Крыса
      </CheckboxGroup.Item>
    </CheckboxGroup>
  ),
};

export const GroupWithDescription: Story = {
  render: ({ color, size }) => (
    <CheckboxGroup
      size={size}
      label="Любимое животное"
      description="Кого вы больше любите?"
    >
      <CheckboxGroup.Item color={color} size={size} value="dog">
        Собака
      </CheckboxGroup.Item>
      <CheckboxGroup.Item color={color} size={size} value="cat" isIndeterminate>
        Кот
      </CheckboxGroup.Item>
      <CheckboxGroup.Item color={color} size={size} value="rat" isDisabled>
        Крыса
      </CheckboxGroup.Item>
    </CheckboxGroup>
  ),
};

export const GroupWithError: Story = {
  render: ({ color, size }) => (
    <CheckboxGroup
      size={size}
      label="Любимое животное"
      errorMessage="Вот ты крыса!"
    >
      <CheckboxGroup.Item color={color} size={size} value="dog">
        Собака
      </CheckboxGroup.Item>
      <CheckboxGroup.Item color={color} size={size} value="cat" isIndeterminate>
        Кот
      </CheckboxGroup.Item>
      <CheckboxGroup.Item color={color} size={size} value="rat" isDisabled>
        Крыса
      </CheckboxGroup.Item>
    </CheckboxGroup>
  ),
};
