import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ToggleIconButton } from './ToggleIconButton';
import { ToggleIconButtonProps } from './ToggleIconButton.types';

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
] satisfies ToggleIconButtonProps['color'][];

const variants = [
  'filled',
  'outlined',
  'ghost',
  'text',
] satisfies ToggleIconButtonProps['selectedVariant'][];

const sizes = ['sm', 'md', 'lg'] satisfies ToggleIconButtonProps['size'][];

const Icon = () => (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
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
    <span className="sr-only">flag</span>
  </>
);

const meta: Meta<typeof ToggleIconButton> = {
  title: 'Components/Buttons/ToggleIconButton',
  component: ToggleIconButton,
  argTypes: {
    children: {
      table: {
        type: { summary: 'ToggleIconButtonProps[children]' },
        defaultValue: {
          summary: 'undefined',
        },
        control: 'text',
      },
    },
    color: {
      table: {
        type: { summary: 'ToggleIconButtonProps[color]' },
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
        type: { summary: 'ToggleIconButtonProps[isDisabled]' },
        defaultValue: {
          summary: 'false',
        },
      },
      type: 'boolean',
      control: 'boolean',
    },
  },
  args: {
    children: <Icon />,
    color: 'primary',
    selectedVariant: 'filled',
    unselectedVariant: 'outlined',
    size: 'md',
    isSelected: false,
    isDisabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof ToggleIconButton>;

export const Playground: Story = {};

export const Colors: Story = {
  render: (args) => (
    <div className="flex flex-wrap max-w-screen-sm items-center justify-center gap-xs">
      <ToggleIconButton {...args} color="primary" />
      <ToggleIconButton {...args} color="secondary" />
      <ToggleIconButton {...args} color="brand" />
      <ToggleIconButton {...args} color="brandSubdued" />
      <ToggleIconButton {...args} color="info" />
      <ToggleIconButton {...args} color="infoSubdued" />
      <ToggleIconButton {...args} color="success" />
      <ToggleIconButton {...args} color="successSubdued" />
      <ToggleIconButton {...args} color="caution" />
      <ToggleIconButton {...args} color="cautionSubdued" />
      <ToggleIconButton {...args} color="critical" />
      <ToggleIconButton {...args} color="criticalSubdued" />
      <ToggleIconButton {...args} disabled />
    </div>
  ),
  parameters: {
    controls: {
      exclude: /color|children/g,
    },
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-xs">
      <ToggleIconButton {...args} size="sm" />
      <ToggleIconButton {...args} size="md" />
      <ToggleIconButton {...args} size="lg" />
    </div>
  ),
  parameters: {
    controls: {
      exclude: /size|children/g,
    },
  },
};
