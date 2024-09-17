import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from './Button';
import { ButtonProps } from './Button.types';

// @ts-ignore
const _: React.ReactNode = null;

const colors = [
  'primary',
  'secondary',
  'info',
  'success',
  'caution',
  'critical',
] satisfies ButtonProps['color'][];

const variants = [
  'elevated',
  'filled',
  'tonal',
  'outlined',
  'text',
] satisfies ButtonProps['variant'][];

const meta: Meta<typeof Button> = {
  title: 'Components/Buttons/Button',
  component: Button,
  argTypes: {
    children: {
      table: {
        type: { summary: 'ButtonProps[children]' },
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
    variant: {
      table: {
        type: { summary: 'ButtonProps[variant]' },
        defaultValue: {
          summary: 'solid',
        },
      },
      type: 'string',
      control: 'select',
      options: variants,
    },
    isDisabled: {
      table: {
        type: { summary: 'ButtonProps[isDisabled]' },
        defaultValue: {
          summary: 'false',
        },
      },
      type: 'boolean',
      control: 'boolean',
    },
  },
  args: {
    children: 'Button',
    color: 'primary',
    variant: 'elevated',
    isDisabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

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
      <Button {...args} color="primary" />
      <Button {...args} color="secondary" />
      <Button {...args} color="info" />
      <Button {...args} color="success" />
      <Button {...args} color="caution" />
      <Button {...args} color="critical" />
      <Button {...args} disabled />
    </div>
  ),
  parameters: {
    controls: {
      exclude: /color/g,
    },
  },
};

export const Variants: Story = {
  render: (args) => (
    <div className="flex gap-xs">
      <Button {...args} variant="elevated" />
      <Button {...args} variant="filled" />
      <Button {...args} variant="tonal" />
      <Button {...args} variant="outlined" />
      <Button {...args} variant="text" />
    </div>
  ),
  parameters: {
    controls: {
      exclude: /variant/g,
    },
  },
};

export const WithIcon: Story = {
  render: ({ children, ...args }) => (
    <div className="flex items-center gap-xs">
      <div className="flex flex-col items-center gap-xs">
        <Button {...args} leftIcon={<Icon />}>
          {children}
        </Button>
        <Button {...args} className="w-64" leftIcon={<Icon />}>
          {children}
        </Button>
      </div>
      <div className="flex flex-col items-center gap-xs">
        <Button {...args} rightIcon={<Icon />}>
          {children}
        </Button>
        <Button {...args} className="w-64" rightIcon={<Icon />}>
          {children}
        </Button>
      </div>
      <div className="flex flex-col items-center gap-xs">
        <Button {...args} leftIcon={<Icon />} rightIcon={<Icon />}>
          {children}
        </Button>
        <Button
          {...args}
          className="w-64"
          leftIcon={<Icon />}
          rightIcon={<Icon />}
        >
          {children}
        </Button>
      </div>
    </div>
  ),
};
