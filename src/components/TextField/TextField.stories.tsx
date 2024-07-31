import type { Meta, StoryObj } from '@storybook/react';
import { IconFlag } from '@tabler/icons-react';
import React from 'react';
import { Button } from '../Button';
import { TextField } from './TextField';

// @ts-ignore
const _: React.ReactNode = null;

const meta: Meta<typeof TextField> = {
  title: 'Components/Controls/TextField',
  component: TextField,
  args: {
    label: '',
    description: '',
    isInvalid: false,
    errorMessage: '',
    placeholder: '',
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

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

export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Placeholder',
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
      <TextField {...args} />
      <Button size="lg">Button</Button>
    </div>
  ),
};

export const WithLeftIcon: Story = {
  args: {
    left: <IconFlag />,
  },
};

export const WithRightIcon: Story = {
  args: {
    right: <IconFlag />,
  },
};

export const WithRightButton: Story = {
  args: {
    right: (
      <Button color="secondary" size="sm" content="icon" variant="ghost">
        <IconFlag />
      </Button>
    ),
  },
};

export const WithAll: Story = {
  render: (args) => (
    <div className="flex gap-2">
      <TextField {...args} />
      <Button size="lg">Button</Button>
    </div>
  ),
  args: {
    label: 'Label',
    description: 'Description',
    placeholder: 'Placeholder',
    right: (
      <Button color="secondary" size="sm" content="icon" variant="ghost">
        <IconFlag />
      </Button>
    ),
  },
};
