import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Switch } from './Switch';
import { SwitchProps } from './Switch.types';

// @ts-ignore
const _: React.ReactNode = null;

const colors = [
  'primary',
  'secondary',
  'info',
  'success',
  'caution',
  'critical',
] satisfies SwitchProps['color'][];

const sizes = ['sm', 'md', 'lg'] satisfies SwitchProps['size'][];

const meta: Meta<typeof Switch> = {
  title: 'Components/Forms/Switch',
  component: Switch,
  argTypes: {
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
    color: 'primary',
    size: 'md',
    isSelected: false,
    isDisabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

const Render: React.FC<SwitchProps> = (args) => {
  const [isSelected, setIsSelected] = React.useState(false);

  return (
    <div className="flex items-center gap-xs typography-large">
      <Switch
        {...args}
        id="playground"
        aria-labelledby="playground-label"
        isSelected={isSelected}
        onChange={setIsSelected}
      />
      <label id="playground-label" htmlFor="playground">
        Playground Switch
      </label>
    </div>
  );
};

export const Playground: Story = {
  render: (args) => <Render {...args} />,
  parameters: {
    controls: {
      exclude: /isSelected/g,
    },
  },
};

export const Colors: Story = {
  render: (args) => (
    <div className="grid gap-xs">
      <div className="flex items-center gap-xs typography-large">
        <Switch
          {...args}
          id="primary"
          aria-labelledby="primary-label"
          color="primary"
        />
        <label id="primary-label" htmlFor="primary">
          Primary
        </label>
      </div>
      <div className="flex items-center gap-xs typography-large">
        <Switch
          {...args}
          id="secondary"
          aria-labelledby="secondary-label"
          color="secondary"
        />
        <label id="secondary-label" htmlFor="secondary">
          Secondary
        </label>
      </div>
      <div className="flex items-center gap-xs typography-large">
        <Switch {...args} id="info" aria-labelledby="info-label" color="info" />
        <label id="info-label" htmlFor="info">
          Info
        </label>
      </div>
      <div className="flex items-center gap-xs typography-large">
        <Switch
          {...args}
          id="success"
          aria-labelledby="success-label"
          color="success"
        />
        <label id="success-label" htmlFor="success">
          Success
        </label>
      </div>
      <div className="flex items-center gap-xs typography-large">
        <Switch
          {...args}
          id="caution"
          aria-labelledby="caution-label"
          color="caution"
        />
        <label id="caution-label" htmlFor="caution">
          Caution
        </label>
      </div>
      <div className="flex items-center gap-xs typography-large">
        <Switch
          {...args}
          id="critical"
          aria-labelledby="critical-label"
          color="critical"
        />
        <label id="critical-label" htmlFor="critical">
          Critical
        </label>
      </div>
      <div className="flex items-center gap-xs typography-large">
        <Switch
          {...args}
          id="disabled"
          aria-labelledby="disabled-label"
          isDisabled
        />
        <label id="disabled-label" htmlFor="disabled">
          Disabled
        </label>
      </div>
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
      <Switch {...args} aria-label="SM Size" size="sm" />
      <Switch {...args} aria-label="MD Size" size="md" />
      <Switch {...args} aria-label="LG Size" size="lg" />
    </div>
  ),
  parameters: {
    controls: {
      exclude: /size/g,
    },
  },
};
