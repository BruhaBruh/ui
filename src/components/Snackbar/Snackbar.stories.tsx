import { QueuedToast } from '@react-stately/toast';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from '../Button';
import { Snackbar } from './Snackbar';
import { SnackbarContent } from './Snackbar.types';
import { SnackbarProvider, useSnackbar } from './SnackbarProvider';
import { SnackbarRegion } from './SnackbarRegion';

const toasts = {
  default: {
    key: 'default',
    content: {
      title: 'Hello, world!',
    },
    animation: 'entering',
  },
  actions: {
    key: 'actions',
    content: {
      title: 'Hello, world!',
      actions: <Button variant="text">Action</Button>,
    },
    animation: 'entering',
  },
  twoLines: {
    key: 'twoLines',
    content: {
      title: 'Hello, world!',
      description: 'Something went wrong',
    },
    animation: 'entering',
  },
  twoLinesActions: {
    key: 'twoLinesActions',
    content: {
      title: 'Hello, world!',
      description: 'Something went wrong',
      actions: <Button variant="text">Action</Button>,
    },
    animation: 'entering',
  },
  longer: {
    key: 'longer',
    content: {
      title: 'Hello, world!',
      description: 'Something went wrong',
      actions: <Button variant="text">Action</Button>,
      longerActions: true,
    },
    animation: 'entering',
  },
  defaultClose: {
    key: 'defaultClose',
    content: {
      title: 'Hello, world!',
      closeButton: true,
    },
    animation: 'entering',
  },
  actionsClose: {
    key: 'actionsClose',
    content: {
      title: 'Hello, world!',
      actions: <Button variant="text">Action</Button>,
      closeButton: true,
    },
    animation: 'entering',
  },
  twoLinesClose: {
    key: 'twoLinesClose',
    content: {
      title: 'Hello, world!',
      description: 'Something went wrong',
      closeButton: true,
    },
    animation: 'entering',
  },
  twoLinesActionsClose: {
    key: 'twoLinesActions',
    content: {
      title: 'Hello, world!',
      description: 'Something went wrong',
      actions: <Button variant="text">Action</Button>,
      closeButton: true,
    },
    animation: 'entering',
  },
  longerClose: {
    key: 'longerClose',
    content: {
      title: 'Hello, world!',
      description: 'Something went wrong',
      actions: <Button variant="text">Action</Button>,
      longerActions: true,
      closeButton: true,
    },
    animation: 'entering',
  },
} satisfies Record<string, QueuedToast<SnackbarContent>>;

const Buttons: React.FC = () => {
  const state = useSnackbar();
  return (
    <div className="gap-xs flex flex-col">
      <Button
        onPress={() => state.add(toasts.default.content, { timeout: 3000 })}
      >
        Default
      </Button>
      <Button
        onPress={() => state.add(toasts.actions.content, { timeout: 3000 })}
      >
        Actions
      </Button>
      <Button
        onPress={() => state.add(toasts.twoLines.content, { timeout: 3000 })}
      >
        Two Lines
      </Button>
      <Button
        onPress={() =>
          state.add(toasts.twoLinesActions.content, { timeout: 3000 })
        }
      >
        Two Lines Actions
      </Button>
      <Button
        onPress={() => state.add(toasts.longer.content, { timeout: 3000 })}
      >
        Longer Actions
      </Button>
      <Button
        onPress={() =>
          state.add(toasts.defaultClose.content, { timeout: 3000 })
        }
      >
        Default w/ close
      </Button>
      <Button
        onPress={() =>
          state.add(toasts.actionsClose.content, { timeout: 3000 })
        }
      >
        Actions w/ close
      </Button>
      <Button
        onPress={() =>
          state.add(toasts.twoLinesClose.content, { timeout: 3000 })
        }
      >
        Two Lines w/ close
      </Button>
      <Button
        onPress={() =>
          state.add(toasts.twoLinesActionsClose.content, { timeout: 3000 })
        }
      >
        Two Lines Actions w/ close
      </Button>
      <Button
        onPress={() => state.add(toasts.longerClose.content, { timeout: 3000 })}
      >
        Longer Actions w/ close
      </Button>
    </div>
  );
};

const meta = {
  title: 'Components/Communication/Snackbar',
  component: Snackbar,
  args: {
    state: {
      add(_content, _options) {
        return '';
      },
      close(_key) {},
      remove(_key) {},
      pauseAll() {},
      resumeAll() {},
      visibleToasts: Object.values(toasts),
    },
    toast: toasts.default,
  },
  render: () => {
    return (
      <SnackbarProvider hasExitAnimation maxVisibleToasts={3}>
        <SnackbarRegion position="bottomRight" />
        <Buttons />
      </SnackbarProvider>
    );
  },
} satisfies Meta<typeof Snackbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutControl: Story = {
  render: (args) => (
    <div className="gap-xs flex flex-col">
      <Snackbar {...args} toast={toasts.default} />
      <Snackbar {...args} toast={toasts.actions} />
      <Snackbar {...args} toast={toasts.twoLines} />
      <Snackbar {...args} toast={toasts.twoLinesActions} />
      <Snackbar {...args} toast={toasts.longer} />
      <Snackbar {...args} toast={toasts.defaultClose} />
      <Snackbar {...args} toast={toasts.actionsClose} />
      <Snackbar {...args} toast={toasts.twoLinesClose} />
      <Snackbar {...args} toast={toasts.twoLinesActionsClose} />
      <Snackbar {...args} toast={toasts.longerClose} />
    </div>
  ),
};
