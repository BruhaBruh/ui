import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Radio } from './Radio';
import { RadioProps } from './Radio.types';
import { RadioGroup } from './RadioGroup';

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
] satisfies RadioProps['color'][];

const sizes = ['sm', 'md', 'lg'] satisfies RadioProps['size'][];

const meta: Meta<typeof Radio> = {
  title: 'Components/Forms/Radio',
  component: Radio,
  argTypes: {
    children: {
      table: {
        type: { summary: 'RadioProps[children]' },
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
        type: { summary: 'RadioProps[isDisabled]' },
        defaultValue: {
          summary: 'false',
        },
      },
      type: 'boolean',
      control: 'boolean',
    },
  },
  args: {
    children: 'Radio Label',
    color: 'primary',
    size: 'md',
    isDisabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Playground: Story = {
  render: (args) => (
    <RadioGroup size={args.size} label="Любимое животное">
      <Radio {...args} value="dog">
        Собака
      </Radio>
      <Radio {...args} value="cat">
        Кот
      </Radio>
      <Radio {...args} value="rat">
        Крыса
      </Radio>
    </RadioGroup>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <RadioGroup size={args.size} label="Любимое животное">
      <Radio {...args} color="primary" value="primary">
        Primary
      </Radio>
      <Radio {...args} color="secondary" value="secondary">
        Secondary
      </Radio>
      <Radio {...args} color="brand" value="brand">
        Brand
      </Radio>
      <Radio {...args} color="brandSubdued" value="brand-subdued">
        Brand Subdued
      </Radio>
      <Radio {...args} color="info" value="info">
        Info
      </Radio>
      <Radio {...args} color="infoSubdued" value="info-subdued">
        Info Subdued
      </Radio>
      <Radio {...args} color="success" value="success">
        Success
      </Radio>
      <Radio {...args} color="successSubdued" value="success-subdued">
        Success Subdued
      </Radio>
      <Radio {...args} color="caution" value="caution">
        Caution
      </Radio>
      <Radio {...args} color="cautionSubdued" value="caution-subdued">
        Caution Subdued
      </Radio>
      <Radio {...args} color="critical" value="critical">
        Critical
      </Radio>
      <Radio {...args} color="criticalSubdued" value="critical-subdued">
        Critical Subdued
      </Radio>
      <Radio {...args} isDisabled value="disabled">
        Disabled
      </Radio>
    </RadioGroup>
  ),
  parameters: {
    controls: {
      exclude: /color/g,
    },
  },
};

export const Sizes: Story = {
  render: (args) => (
    <RadioGroup size={args.size} label="Любимое животное">
      <Radio {...args} size="sm" value="dog">
        Собака
      </Radio>
      <Radio {...args} size="md" value="cat">
        Кот
      </Radio>
      <Radio {...args} size="lg" value="rat">
        Крыса
      </Radio>
    </RadioGroup>
  ),
  parameters: {
    controls: {
      exclude: /size/g,
    },
  },
};

export const WithDescription: Story = {
  render: ({ color, size }) => (
    <RadioGroup
      size={size}
      label="Любимое животное"
      description="Кого вы больше любите?"
    >
      <Radio color={color} size={size} value="dog">
        Собака
      </Radio>
      <Radio color={color} size={size} value="cat">
        Кот
      </Radio>
      <Radio color={color} size={size} value="rat" isDisabled>
        Крыса
      </Radio>
    </RadioGroup>
  ),
};

export const WithError: Story = {
  render: ({ color, size }) => (
    <RadioGroup
      size={size}
      label="Любимое животное"
      errorMessage="Вот ты крыса!"
    >
      <Radio color={color} size={size} value="dog">
        Собака
      </Radio>
      <Radio color={color} size={size} value="cat">
        Кот
      </Radio>
      <Radio color={color} size={size} value="rat" isDisabled>
        Крыса
      </Radio>
    </RadioGroup>
  ),
};
