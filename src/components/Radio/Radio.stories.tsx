import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';
import { RadioProps } from './Radio.types';
import { RadioGroup } from './RadioGroup';

const meta: Meta<typeof Radio> = {
  title: 'Components/Selection/Radio',
  component: Radio,
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
      description: "Radio's color",
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
      ] satisfies RadioProps['color'][],
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
  },
  args: {
    children: 'Radio Label',
    color: 'primary',
    isDisabled: false,
  },
  parameters: {
    controls: {
      exclude: /children/g,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Playground: Story = {
  render: (args) => (
    <RadioGroup defaultValue="dog" label="Любимое животное">
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
    <RadioGroup defaultValue="primary" label="Colors">
      <Radio {...args} color="primary" value="primary">
        Primary
      </Radio>
      <Radio {...args} color="secondary" value="secondary">
        Secondary
      </Radio>
      <Radio {...args} color="info" value="info">
        Info
      </Radio>
      <Radio {...args} color="success" value="success">
        Success
      </Radio>
      <Radio {...args} color="caution" value="caution">
        Caution
      </Radio>
      <Radio {...args} color="critical" value="critical">
        Critical
      </Radio>
      <Radio {...args} isDisabled value="disabled">
        Disabled
      </Radio>
    </RadioGroup>
  ),
  parameters: {
    controls: {
      exclude: /color|children/g,
    },
  },
};

export const WithDescription: Story = {
  render: ({ color }) => (
    <RadioGroup
      defaultValue="dog"
      label="Любимое животное"
      description="Кого вы больше любите?"
    >
      <Radio color={color} value="dog">
        Собака
      </Radio>
      <Radio color={color} value="cat">
        Кот
      </Radio>
      <Radio color={color} value="rat" isDisabled>
        Крыса
      </Radio>
    </RadioGroup>
  ),
};

export const WithError: Story = {
  render: ({ color }) => (
    <RadioGroup
      defaultValue="dog"
      label="Любимое животное"
      errorMessage="Вот ты крыса!"
    >
      <Radio color={color} value="dog">
        Собака
      </Radio>
      <Radio color={color} value="cat">
        Кот
      </Radio>
      <Radio color={color} value="rat" isDisabled>
        Крыса
      </Radio>
    </RadioGroup>
  ),
};
