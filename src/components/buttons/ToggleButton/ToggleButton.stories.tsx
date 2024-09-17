import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ToggleButton } from './ToggleButton';
import { ToggleButtonProps } from './ToggleButton.types';

// @ts-ignore
const _: React.ReactNode = null;

const colors = [
  'primary',
  'secondary',
  'info',
  'success',
  'caution',
  'critical',
] satisfies ToggleButtonProps['color'][];

const variants = [
  'elevated',
  'filled',
  'tonal',
  'outlined',
  'text',
] satisfies ToggleButtonProps['selectedVariant'][];

const sizes = ['sm', 'md', 'lg'] satisfies ToggleButtonProps['size'][];

const meta: Meta<typeof ToggleButton> = {
  title: 'Components/Buttons/ToggleButton',
  component: ToggleButton,
  argTypes: {
    children: {
      table: {
        type: { summary: 'ToggleButtonProps[children]' },
        defaultValue: {
          summary: 'undefined',
        },
        control: 'text',
      },
    },
    color: {
      table: {
        type: { summary: 'ToggleButtonProps[color]' },
        defaultValue: {
          summary: 'primary',
        },
      },
      type: 'string',
      control: 'select',
      options: colors,
    },
    selectedVariant: {
      table: {
        type: { summary: 'ToggleButtonProps[selectedVariant]' },
        defaultValue: {
          summary: 'solid',
        },
      },
      type: 'string',
      control: 'select',
      options: variants,
    },
    unselectedVariant: {
      table: {
        type: { summary: 'ToggleButtonProps[unselectedVariant]' },
        defaultValue: {
          summary: 'solid',
        },
      },
      type: 'string',
      control: 'select',
      options: variants,
    },
    size: {
      table: {
        type: { summary: 'ToggleButtonProps[size]' },
        defaultValue: {
          summary: 'md',
        },
      },
      type: 'string',
      control: 'select',
      options: sizes,
    },
    isSelected: {
      table: {
        type: { summary: 'ToggleButtonProps[isSelected]' },
        defaultValue: {
          summary: 'false',
        },
      },
      type: 'boolean',
      control: 'boolean',
    },
    isDisabled: {
      table: {
        type: { summary: 'ToggleButtonProps[isDisabled]' },
        defaultValue: {
          summary: 'false',
        },
      },
      type: 'boolean',
      control: 'boolean',
    },
  },
  args: {
    children: 'ToggleButton',
    color: 'primary',
    selectedVariant: 'filled',
    unselectedVariant: 'outlined',
    size: 'md',
    isSelected: false,
    isDisabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof ToggleButton>;

const Icon = React.forwardRef<SVGSVGElement>((_props, ref) => (
  <svg
    ref={ref}
    aria-label="flag"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 3a2 2 0 0 0-2 2" />
    <path d="M19 3a2 2 0 0 1 2 2" />
    <path d="M21 19a2 2 0 0 1-2 2" />
    <path d="M5 21a2 2 0 0 1-2-2" />
    <path d="M9 3h1" />
    <path d="M9 21h1" />
    <path d="M14 3h1" />
    <path d="M14 21h1" />
    <path d="M3 9v1" />
    <path d="M21 9v1" />
    <path d="M3 14v1" />
    <path d="M21 14v1" />
  </svg>
));
Icon.displayName = 'Icon';

export const Playground: Story = {};

export const Colors: Story = {
  render: (args) => (
    <div className="flex flex-wrap max-w-screen-sm items-center justify-center gap-xs">
      <ToggleButton {...args} color="primary" />
      <ToggleButton {...args} color="secondary" />
      <ToggleButton {...args} color="info" />
      <ToggleButton {...args} color="success" />
      <ToggleButton {...args} color="caution" />
      <ToggleButton {...args} color="critical" />
      <ToggleButton {...args} disabled />
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
    <div className="flex items-center gap-xs">
      <div className="flex flex-col items-center gap-xs">
        <ToggleButton {...args} size="sm" />
        <ToggleButton {...args} size="sm" leftIcon={<Icon />} />
      </div>
      <div className="flex flex-col items-center gap-xs">
        <ToggleButton {...args} size="md" />
        <ToggleButton {...args} size="md" leftIcon={<Icon />} />
      </div>
      <div className="flex flex-col items-center gap-xs">
        <ToggleButton {...args} size="lg" />
        <ToggleButton {...args} size="lg" leftIcon={<Icon />} />
      </div>
    </div>
  ),
  parameters: {
    controls: {
      exclude: /size/g,
    },
  },
};

export const WithIcon: Story = {
  render: ({ children, ...args }) => (
    <div className="flex flex-col items-center gap-xs">
      <ToggleButton {...args} leftIcon={<Icon />}>
        {children}
      </ToggleButton>
      <ToggleButton {...args} className="w-64" leftIcon={<Icon />}>
        {children}
      </ToggleButton>
    </div>
  ),
};
