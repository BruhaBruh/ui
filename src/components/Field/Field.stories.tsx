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
  args: {
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

export const TextField: Story = {};

export const TextArea: Story = {
  render: (args) => (
    <Field {...args}>
      <Field.TextArea placeholder={args['aria-placeholder']} />
    </Field>
  ),
};

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

export const WithLeftIcon: Story = {
  args: {
    left: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M7.47 3.588a4.45 4.45 0 0 0-4.15-.224.55.55 0 0 0-.32.499v5.533a6.25 6.25 0 0 1 5.547.439l.344.207a4.02 4.02 0 0 0 3.865.148.44.44 0 0 0 .244-.395V4.182a6.26 6.26 0 0 1-5.386-.508zm5.957 7.944a5.52 5.52 0 0 1-5.307-.204l-.345-.207a4.75 4.75 0 0 0-4.314-.293L3 11.026v3.255a.75.75 0 0 1-1.5 0V3.863c0-.8.465-1.526 1.19-1.861a5.95 5.95 0 0 1 5.552.3l.144.086a4.76 4.76 0 0 0 4.447.24l.603-.278a.75.75 0 0 1 1.064.681v6.764c0 .735-.416 1.408-1.073 1.737"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
};

export const WithRightIcon: Story = {
  args: {
    right: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M7.47 3.588a4.45 4.45 0 0 0-4.15-.224.55.55 0 0 0-.32.499v5.533a6.25 6.25 0 0 1 5.547.439l.344.207a4.02 4.02 0 0 0 3.865.148.44.44 0 0 0 .244-.395V4.182a6.26 6.26 0 0 1-5.386-.508zm5.957 7.944a5.52 5.52 0 0 1-5.307-.204l-.345-.207a4.75 4.75 0 0 0-4.314-.293L3 11.026v3.255a.75.75 0 0 1-1.5 0V3.863c0-.8.465-1.526 1.19-1.861a5.95 5.95 0 0 1 5.552.3l.144.086a4.76 4.76 0 0 0 4.447.24l.603-.278a.75.75 0 0 1 1.064.681v6.764c0 .735-.416 1.408-1.073 1.737"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
};

export const WithRightButton: Story = {
  args: {
    right: (
      <Button color="secondary" size="sm" content="icon" variant="ghost">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M7.47 3.588a4.45 4.45 0 0 0-4.15-.224.55.55 0 0 0-.32.499v5.533a6.25 6.25 0 0 1 5.547.439l.344.207a4.02 4.02 0 0 0 3.865.148.44.44 0 0 0 .244-.395V4.182a6.26 6.26 0 0 1-5.386-.508zm5.957 7.944a5.52 5.52 0 0 1-5.307-.204l-.345-.207a4.75 4.75 0 0 0-4.314-.293L3 11.026v3.255a.75.75 0 0 1-1.5 0V3.863c0-.8.465-1.526 1.19-1.861a5.95 5.95 0 0 1 5.552.3l.144.086a4.76 4.76 0 0 0 4.447.24l.603-.278a.75.75 0 0 1 1.064.681v6.764c0 .735-.416 1.408-1.073 1.737"
            clipRule="evenodd"
          />
        </svg>
      </Button>
    ),
  },
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
    'aria-placeholder': 'Placeholder',
    right: (
      <Button color="secondary" size="sm" content="icon" variant="ghost">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M7.47 3.588a4.45 4.45 0 0 0-4.15-.224.55.55 0 0 0-.32.499v5.533a6.25 6.25 0 0 1 5.547.439l.344.207a4.02 4.02 0 0 0 3.865.148.44.44 0 0 0 .244-.395V4.182a6.26 6.26 0 0 1-5.386-.508zm5.957 7.944a5.52 5.52 0 0 1-5.307-.204l-.345-.207a4.75 4.75 0 0 0-4.314-.293L3 11.026v3.255a.75.75 0 0 1-1.5 0V3.863c0-.8.465-1.526 1.19-1.861a5.95 5.95 0 0 1 5.552.3l.144.086a4.76 4.76 0 0 0 4.447.24l.603-.278a.75.75 0 0 1 1.064.681v6.764c0 .735-.416 1.408-1.073 1.737"
            clipRule="evenodd"
          />
        </svg>
      </Button>
    ),
  },
};
