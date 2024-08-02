import { Flag2Linear } from '@bruhabruh/solar-icon-set';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from '../Button';
import { DateField } from './DateField';

// @ts-ignore
const _: React.ReactNode = null;

const meta: Meta<typeof DateField> = {
  title: 'Components/Controls/DateField',
  component: DateField,
  args: {
    label: '',
    description: '',
    isInvalid: false,
    errorMessage: '',
  },
};

export default meta;
type Story = StoryObj<typeof DateField>;

export const Playground: Story = {};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Label',
  },
};

export const WithDescription: Story = {
  args: {
    description: 'Description',
  },
};

export const WithError: Story = {
  args: {
    isInvalid: true,
    errorMessage: 'Error message',
  },
};

export const WithButton: Story = {
  render: (args) => (
    <div className="flex gap-2">
      <DateField {...args} />
      <Button size="lg">Button</Button>
    </div>
  ),
};

export const WithLeftIcon: Story = {
  args: {
    left: <Flag2Linear />,
  },
};

export const WithRightIcon: Story = {
  args: {
    right: <Flag2Linear />,
  },
};

export const WithAll: Story = {
  render: (args) => (
    <div className="flex gap-2">
      <DateField {...args} />
      <Button size="lg">Button</Button>
    </div>
  ),
  args: {
    label: 'Label',
    description: 'Description',
  },
};
