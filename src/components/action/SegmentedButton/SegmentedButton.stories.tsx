import type { Meta, StoryObj } from '@storybook/react';
import { IconSquare, IconSquareFilled } from '@tabler/icons-react';
import React from 'react';
import { SegmentedButton } from './SegmentedButton';
import { SegmentedButtonProps } from './SegmentedButton.types';

const meta = {
  title: 'Components/Action/SegmentedButton',
  component: SegmentedButton,
  argTypes: {
    children: {
      description: 'Child element',
      table: {
        type: { summary: 'React.ReactNode' },
        defaultValue: {
          summary: 'undefined',
        },
        control: 'text',
      },
    },
    color: {
      description: "SegmentedButton's color",
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
      ] satisfies SegmentedButtonProps['color'][],
    },
    isSelected: {
      description: "SegmentedButton's selected state",
      table: {
        type: { summary: 'true | false' },
        defaultValue: {
          summary: 'false',
        },
      },
      type: 'boolean',
      control: 'boolean',
    },
    isDisabled: {
      description: "SegmentedButton's disabled state",
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
    children: 'SegmentedButton',
    color: 'primary',
    isSelected: false,
    isDisabled: false,
  },
} satisfies Meta<typeof SegmentedButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const AnotherSelectedIcon: Story = {
  render: ({ children, ...args }) => (
    <SegmentedButton {...args}>
      <SegmentedButton.SelectedIcon>
        <IconSquareFilled />
      </SegmentedButton.SelectedIcon>
      {children}
    </SegmentedButton>
  ),
};

const GroupItemsSingleSelect: React.FC<SegmentedButtonProps> = (args) => {
  const [selected, setSelected] = React.useState<string[]>(['fifth']);

  const handleChange = (name: string) => (isSelected: boolean) => {
    setSelected(isSelected ? [name] : []);
  };

  return (
    <SegmentedButton.Group className="w-screen max-w-screen-sm">
      <SegmentedButton
        {...args}
        isSelected={selected.includes('first')}
        onChange={handleChange('first')}
      >
        First
      </SegmentedButton>
      <SegmentedButton
        {...args}
        isSelected={selected.includes('second')}
        onChange={handleChange('second')}
      >
        Second
      </SegmentedButton>
      <SegmentedButton
        {...args}
        isSelected={selected.includes('third')}
        onChange={handleChange('third')}
        isDisabled
      >
        Third
      </SegmentedButton>
      <SegmentedButton
        {...args}
        isSelected={selected.includes('fourth')}
        onChange={handleChange('fourth')}
      >
        Fourth
      </SegmentedButton>
      <SegmentedButton
        {...args}
        isSelected={selected.includes('fifth')}
        onChange={handleChange('fifth')}
        isDisabled
      >
        Fifth
      </SegmentedButton>
    </SegmentedButton.Group>
  );
};

const GroupItemsMultiSelect: React.FC<SegmentedButtonProps> = (args) => {
  const [selected, setSelected] = React.useState<string[]>(['first', 'fifth']);

  const handleChange = (name: string) => (isSelected: boolean) => {
    setSelected((prev) => {
      const newState = prev.filter((item) => item !== name);
      if (isSelected) {
        return [...newState, name];
      }
      return newState;
    });
  };

  return (
    <SegmentedButton.Group className="w-screen max-w-screen-sm">
      <SegmentedButton.SelectedIcon>
        <IconSquareFilled />
      </SegmentedButton.SelectedIcon>
      <SegmentedButton
        {...args}
        isSelected={selected.includes('first')}
        onChange={handleChange('first')}
      >
        First
      </SegmentedButton>
      <SegmentedButton
        {...args}
        isSelected={selected.includes('second')}
        onChange={handleChange('second')}
      >
        Second
      </SegmentedButton>
      <SegmentedButton
        {...args}
        isSelected={selected.includes('third')}
        onChange={handleChange('third')}
        isDisabled
      >
        Third
      </SegmentedButton>
      <SegmentedButton
        {...args}
        isSelected={selected.includes('fourth')}
        onChange={handleChange('fourth')}
      >
        Fourth
      </SegmentedButton>
      <SegmentedButton
        {...args}
        isSelected={selected.includes('fifth')}
        onChange={handleChange('fifth')}
        isDisabled
      >
        Fifth
      </SegmentedButton>
    </SegmentedButton.Group>
  );
};

const GroupItemsWithIcons: React.FC<SegmentedButtonProps> = (args) => {
  const [selected, setSelected] = React.useState<string[]>(['first', 'fifth']);

  const handleChange = (name: string) => (isSelected: boolean) => {
    setSelected((prev) => {
      const newState = prev.filter((item) => item !== name);
      if (isSelected) {
        return [...newState, name];
      }
      return newState;
    });
  };

  return (
    <SegmentedButton.Group className="w-screen max-w-screen-sm">
      <SegmentedButton
        {...args}
        isSelected={selected.includes('first')}
        onChange={handleChange('first')}
      >
        <IconSquare />
      </SegmentedButton>
      <SegmentedButton
        {...args}
        isSelected={selected.includes('second')}
        onChange={handleChange('second')}
      >
        <IconSquare />
      </SegmentedButton>
      <SegmentedButton
        {...args}
        isSelected={selected.includes('third')}
        onChange={handleChange('third')}
        isDisabled
      >
        <IconSquare />
      </SegmentedButton>
      <SegmentedButton
        {...args}
        isSelected={selected.includes('fourth')}
        onChange={handleChange('fourth')}
      >
        <IconSquare />
      </SegmentedButton>
      <SegmentedButton
        {...args}
        isSelected={selected.includes('fifth')}
        onChange={handleChange('fifth')}
        isDisabled
      >
        <IconSquare />
      </SegmentedButton>
    </SegmentedButton.Group>
  );
};

export const GroupSingleSelect: Story = {
  render: (args) => <GroupItemsSingleSelect {...args} />,
  parameters: {
    controls: {
      exclude: /isSelected|children/g,
    },
  },
};

export const GroupMultiSelect: Story = {
  render: (args) => <GroupItemsMultiSelect {...args} />,
  parameters: {
    controls: {
      exclude: /isSelected|children/g,
    },
  },
};

export const GroupWithIcons: Story = {
  render: (args) => <GroupItemsWithIcons {...args} />,
  parameters: {
    controls: {
      exclude: /isSelected|children/g,
    },
  },
};
