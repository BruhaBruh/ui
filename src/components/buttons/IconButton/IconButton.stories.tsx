import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { IconButton } from './IconButton';
import { IconButtonProps } from './IconButton.types';

// @ts-ignore
const _: React.ReactNode = null;

const colors = [
  'primary',
  'secondary',
  'info',
  'success',
  'caution',
  'critical',
] satisfies IconButtonProps['color'][];

const variants = [
  'elevated',
  'filled',
  'tonal',
  'outlined',
  'text',
] satisfies IconButtonProps['variant'][];

const sizes = ['sm', 'md', 'lg'] satisfies IconButtonProps['size'][];

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

const meta: Meta<typeof IconButton> = {
  title: 'Components/Buttons/IconButton',
  component: IconButton,
  argTypes: {
    children: {
      table: {
        type: { summary: 'IconButtonProps[children]' },
        defaultValue: {
          summary: 'undefined',
        },
        control: 'text',
      },
    },
    color: {
      table: {
        type: { summary: 'IconButtonProps[color]' },
        defaultValue: {
          summary: 'primary',
        },
      },
      type: 'string',
      control: 'select',
      options: colors,
    },
    variant: {
      table: {
        type: { summary: 'IconButtonProps[variant]' },
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
        type: { summary: 'IconButtonProps[size]' },
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
        type: { summary: 'IconButtonProps[isDisabled]' },
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
    variant: 'elevated',
    size: 'md',
    isDisabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Playground: Story = {};

export const Colors: Story = {
  render: (args) => (
    <div className="flex flex-wrap max-w-screen-sm items-center justify-center gap-xs">
      <IconButton {...args} color="primary" />
      <IconButton {...args} color="secondary" />
      <IconButton {...args} color="info" />
      <IconButton {...args} color="success" />
      <IconButton {...args} color="caution" />
      <IconButton {...args} color="critical" />
      <IconButton {...args} disabled />
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
      <IconButton {...args} size="sm" />
      <IconButton {...args} size="md" />
      <IconButton {...args} size="lg" />
    </div>
  ),
  parameters: {
    controls: {
      exclude: /size|children/g,
    },
  },
};

export const Variants: Story = {
  render: (args) => (
    <div className="flex gap-xs">
      <IconButton {...args} variant="elevated" />
      <IconButton {...args} variant="filled" />
      <IconButton {...args} variant="tonal" />
      <IconButton {...args} variant="outlined" />
      <IconButton {...args} variant="text" />
    </div>
  ),
  parameters: {
    controls: {
      exclude: /variant|children/g,
    },
  },
};
