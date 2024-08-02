import { Flag2Linear } from '@bruhabruh/solar-icon-set';
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
  'solid',
  'ghost',
  'outline',
  'link',
] satisfies ButtonProps['variant'][];

const contents = ['default', 'icon'] satisfies ButtonProps['content'][];

const sizes = ['sm', 'md', 'lg'] satisfies ButtonProps['size'][];

const meta: Meta<typeof Button> = {
  title: 'Components/Controls/Button',
  component: Button,
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
    content: {
      table: {
        type: { summary: 'ButtonProps[content]' },
        defaultValue: {
          summary: 'default',
        },
      },
      type: 'string',
      control: 'select',
      options: contents,
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
    children: <span>Button</span>,
    color: 'primary',
    variant: 'solid',
    content: 'default',
    size: 'md',
    isDisabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Playground: Story = {};

export const Colors: Story = {
  render: (args) => (
    <div className="flex gap-2">
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
    <div className="flex items-center gap-2">
      <Button {...args} size="sm" />
      <Button {...args} size="md" />
      <Button {...args} size="lg" />
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
    <div className="flex gap-2">
      <Button {...args} variant="solid" />
      <Button {...args} variant="ghost" />
      <Button {...args} variant="outline" />
      <Button {...args} variant="link" />
    </div>
  ),
  parameters: {
    controls: {
      exclude: /variant/g,
    },
  },
};

export const Contents: Story = {
  render: (args) => (
    <div className="flex gap-2">
      <Button {...args} content="default" />
      <Button {...args} content="icon">
        <Flag2Linear />
        <span className="sr-only">flag</span>
      </Button>
    </div>
  ),
  parameters: {
    controls: {
      exclude: /content/g,
    },
  },
};

export const WithIcon: Story = {
  render: ({ children, ...args }) => (
    <div className="flex gap-2">
      <Button {...args}>
        <Flag2Linear />
        {children}
      </Button>
      <Button {...args}>
        <Flag2Linear />
        {children}
        <Flag2Linear />
      </Button>
      <Button {...args}>
        {children}
        <Flag2Linear />
      </Button>
    </div>
  ),
  parameters: {
    controls: {
      exclude: /children/g,
    },
  },
};

export const WithIconAndWider: Story = {
  render: ({ children, ...args }) => (
    <div className="flex flex-col gap-2">
      <Button {...args} className="w-64">
        <Flag2Linear />
        {children}
        <Button.EmptyIcon />
      </Button>
      <Button {...args} className="w-64">
        <Flag2Linear />
        {children}
        <Flag2Linear />
      </Button>
      <Button {...args} className="w-64">
        <Button.EmptyIcon />
        {children}
        <Flag2Linear />
      </Button>
    </div>
  ),
  parameters: {
    controls: {
      exclude: /children/g,
    },
  },
};
