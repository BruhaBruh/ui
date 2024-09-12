import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Switch } from './Switch';
import { SwitchProps } from './Switch.types';

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
] satisfies SwitchProps['color'][];

const sizes = ['sm', 'md', 'lg'] satisfies SwitchProps['size'][];

const meta: Meta<typeof Switch> = {
  title: 'Components/Forms/Switch',
  component: Switch,
  argTypes: {
    children: {
      table: {
        type: { summary: 'SwitchProps[children]' },
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
        type: { summary: 'SwitchProps[isDisabled]' },
        defaultValue: {
          summary: 'false',
        },
      },
      type: 'boolean',
      control: 'boolean',
    },
    isSelected: {
      table: {
        type: { summary: 'SwitchProps[isSelected]' },
        defaultValue: {
          summary: 'false',
        },
      },
      type: 'boolean',
      control: 'boolean',
    },
  },
  args: {
    children: 'Switch Label',
    color: 'primary',
    size: 'md',
    isSelected: false,
    isDisabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Playground: Story = {};

export const Colors: Story = {
  render: (args) => (
    <div className="flex flex-col gap-xs">
      <Switch {...args} color="primary" />
      <Switch {...args} color="secondary" />
      <Switch {...args} color="brand" />
      <Switch {...args} color="brandSubdued" />
      <Switch {...args} color="info" />
      <Switch {...args} color="infoSubdued" />
      <Switch {...args} color="success" />
      <Switch {...args} color="successSubdued" />
      <Switch {...args} color="caution" />
      <Switch {...args} color="cautionSubdued" />
      <Switch {...args} color="critical" />
      <Switch {...args} color="criticalSubdued" />
      <Switch {...args} isDisabled />
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
      <Switch {...args} size="sm" />
      <Switch {...args} size="md" />
      <Switch {...args} size="lg" />
    </div>
  ),
  parameters: {
    controls: {
      exclude: /size/g,
    },
  },
};
