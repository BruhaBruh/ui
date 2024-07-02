import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from '../Button';
import { Field } from './Field';

// @ts-ignore
const _: React.ReactNode = null;

const meta: Meta<typeof Field> = {
  title: 'Components/Controls/Field',
  component: Field,
  render: (args) => (
    <Field {...args}>
      <Field.Text placeholder={args['aria-placeholder']} />
    </Field>
  ),
  argTypes: {},
  args: {
    children: <Field.Text />,
    label: '',
    description: '',
    isInvalid: false,
    errorMessage: '',
    'aria-placeholder': '',
  },
};

export default meta;
type Story = StoryObj<typeof Field>;

export const Playground: Story = {};

export const WithLabel: Story = {
  args: {
    label: 'Label',
  },
};

export const WithPlaceholder: Story = {
  args: {
    'aria-placeholder': 'Placeholder',
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
      <Field {...args}>
        <Field.Text placeholder={args['aria-placeholder']} />
      </Field>
      <Button size="lg">Button</Button>
    </div>
  ),
};

export const WithTextArea: Story = {
  render: (args) => (
    <Field {...args}>
      <Field.TextArea placeholder={args['aria-placeholder']} />
    </Field>
  ),
};

export const WithAll: Story = {
  render: (args) => (
    <div className="flex gap-2">
      <Field {...args}>
        <Field.TextArea placeholder={args['aria-placeholder']} />
      </Field>
      <Button size="lg">Button</Button>
    </div>
  ),
  args: {
    label: 'Label',
    description: 'Description',
  },
};
