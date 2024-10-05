import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { CheckboxProps } from './Checkbox.types';
import { CheckboxGroup } from './CheckboxGroup';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    children: {
      description: 'Child element as label',
      table: {
        type: { summary: 'React.ReactNode' },
        defaultValue: {
          summary: 'undefined',
        },
        control: 'text',
      },
    },
    color: {
      description: "Checkbox's color",
      table: {
        type: {
          summary: 'primary | secondary | info | success | caution | critical',
        },
        defaultValue: {
          summary: 'primary',
        },
      },
      type: 'string',
      control: 'select',
      options: [
        'primary',
        'secondary',
        'info',
        'success',
        'caution',
        'critical',
      ] satisfies CheckboxProps['color'][],
    },
    isDisabled: {
      description: "Checkbox's disabled state",
      table: {
        type: { summary: 'true | false' },
        defaultValue: {
          summary: 'false',
        },
      },
      type: 'boolean',
      control: 'boolean',
    },
    isIndeterminate: {
      description: "Checkbox's indeterminate state",
      table: {
        type: { summary: 'true | false' },
        defaultValue: {
          summary: 'false',
        },
      },
      type: 'boolean',
      control: 'boolean',
    },
    isInvalid: {
      description: "Checkbox's invalid state",
      table: {
        type: { summary: 'true | false' },
        defaultValue: {
          summary: 'false',
        },
      },
      type: 'boolean',
      control: 'boolean',
    },
    isSelected: {
      description: "Checkbox's selected state",
      table: {
        type: { summary: 'true | false' },
        defaultValue: {
          summary: 'false',
        },
      },
      type: 'boolean',
      control: 'boolean',
    },
  },
  args: {
    children: 'Checkbox Label',
    color: 'primary',
    isSelected: false,
    isIndeterminate: false,
    isInvalid: false,
    isDisabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Playground: Story = {};

export const Colors: Story = {
  render: (args) => (
    <div className="flex flex-col">
      <Checkbox {...args} color="primary" />
      <Checkbox {...args} color="secondary" />
      <Checkbox {...args} color="info" />
      <Checkbox {...args} color="success" />
      <Checkbox {...args} color="caution" />
      <Checkbox {...args} color="critical" />
      <Checkbox {...args} isDisabled />
    </div>
  ),
  parameters: {
    controls: {
      exclude: /color/g,
    },
  },
  args: {
    isSelected: true,
  },
};

export const Group: Story = {
  render: ({ color }) => (
    <CheckboxGroup label="Любимое животное">
      <CheckboxGroup.Item color={color} value="dog">
        Собака
      </CheckboxGroup.Item>
      <CheckboxGroup.Item color={color} value="cat" isIndeterminate>
        Кот
      </CheckboxGroup.Item>
      <CheckboxGroup.Item color={color} value="rat" isDisabled>
        Крыса
      </CheckboxGroup.Item>
    </CheckboxGroup>
  ),
};

export const GroupWithDescription: Story = {
  render: ({ color }) => (
    <CheckboxGroup
      label="Любимое животное"
      description="Кого вы больше любите?"
    >
      <CheckboxGroup.Item color={color} value="dog">
        Собака
      </CheckboxGroup.Item>
      <CheckboxGroup.Item color={color} value="cat" isIndeterminate>
        Кот
      </CheckboxGroup.Item>
      <CheckboxGroup.Item color={color} value="rat" isDisabled>
        Крыса
      </CheckboxGroup.Item>
    </CheckboxGroup>
  ),
};

export const GroupWithError: Story = {
  render: ({ color }) => (
    <CheckboxGroup label="Любимое животное" errorMessage="Вот ты крыса!">
      <CheckboxGroup.Item color={color} value="dog">
        Собака
      </CheckboxGroup.Item>
      <CheckboxGroup.Item color={color} value="cat" isIndeterminate>
        Кот
      </CheckboxGroup.Item>
      <CheckboxGroup.Item color={color} value="rat" isDisabled>
        Крыса
      </CheckboxGroup.Item>
    </CheckboxGroup>
  ),
};
