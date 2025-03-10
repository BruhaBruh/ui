import React from 'react';
import type { StoryProps } from '../story';
import { Story } from '../story';
import type { StoryPlaygroundState } from './story-playground-context';
import { StoryPlaygroundContext } from './story-playground-context';

const computeDefaultValues = (
  args: StoryPlaygroundState['arguments'],
): StoryPlaygroundState['values'] => {
  const values: StoryPlaygroundState['values'] = {};

  Object.entries(args).forEach(([arg, options]) => {
    if (options.type === 'number') {
      values[arg] = options.defaultValue || 0;
      return;
    }
    if (options.type === 'text') {
      values[arg] = options.defaultValue || '';
      return;
    }
    if (options.type === 'switch') {
      values[arg] = options.defaultValue || false;
      return;
    }
    if (options.type === 'select') {
      values[arg] = options.defaultValue || options.options[0] || null;
      return;
    }
    if (options.type === 'radio') {
      values[arg] = options.defaultValue || options.options[0] || null;
      return;
    }
    if (options.type === 'checkbox') {
      values[arg] = options.defaultValue || options.options[0] || null;
      return;
    }
  });

  return values;
};

export const StoryPlayground: React.FC<
  React.PropsWithChildren<Omit<StoryPlaygroundState, 'values'>> & StoryProps
> = ({ children, arguments: args, ...props }) => {
  const memoizedArguments = React.useMemo(
    () => ({ arguments: args, values: computeDefaultValues(args) }),
    [args],
  );
  const [state, setState] = React.useState(memoizedArguments);
  const memoizedState = React.useMemo(() => state, [state]);

  return (
    <StoryPlaygroundContext.Provider value={[memoizedState, setState]}>
      <Story {...props}>{children}</Story>
    </StoryPlaygroundContext.Provider>
  );
};
