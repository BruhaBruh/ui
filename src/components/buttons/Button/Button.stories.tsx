import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from './Button';
import { ButtonProps } from './Button.types';

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
] satisfies ButtonProps['color'][];

const variants = [
  'filled',
  'outlined',
  'ghost',
  'text',
] satisfies ButtonProps['variant'][];

const sizes = ['sm', 'md', 'lg'] satisfies ButtonProps['size'][];

const meta: Meta<typeof Button> = {
  title: 'Components/Controls/Buttons/Button',
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
    variant: 'filled',
    size: 'md',
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
));
Icon.displayName = 'Icon';

export const Playground: Story = {};

export const Colors: Story = {
  render: (args) => (
    <div className="flex flex-wrap max-w-screen-sm items-center justify-center gap-xs">
      <Button {...args} color="primary" />
      <Button {...args} color="secondary" />
      <Button {...args} color="brand" />
      <Button {...args} color="brandSubdued" />
      <Button {...args} color="info" />
      <Button {...args} color="infoSubdued" />
      <Button {...args} color="success" />
      <Button {...args} color="successSubdued" />
      <Button {...args} color="caution" />
      <Button {...args} color="cautionSubdued" />
      <Button {...args} color="critical" />
      <Button {...args} color="criticalSubdued" />
      <Button {...args} disabled />
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
        <Button {...args} size="sm" />
        <Button {...args} size="sm" icon={<Icon />} />
      </div>
      <div className="flex flex-col items-center gap-xs">
        <Button {...args} size="md" />
        <Button {...args} size="md" icon={<Icon />} />
      </div>
      <div className="flex flex-col items-center gap-xs">
        <Button {...args} size="lg" />
        <Button {...args} size="lg" icon={<Icon />} />
      </div>
    </div>
  ),
  parameters: {
    controls: {
      exclude: /size/g,
    },
  },
};

export const Variants: Story = {
  render: (args) => (
    <div className="flex gap-xs">
      <Button {...args} variant="filled" />
      <Button {...args} variant="outlined" />
      <Button {...args} variant="ghost" />
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
    <div className="flex flex-col items-center gap-xs">
      <Button {...args} icon={<Icon />}>
        {children}
      </Button>
      <Button {...args} className="w-64" icon={<Icon />}>
        {children}
      </Button>
    </div>
  ),
};
