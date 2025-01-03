import React from 'react';
import {
  StoryPlaygroundState,
  useStoryPlayground,
} from './story-playground-context';

export const StoryPlaygroundRender: React.FC<{
  children: (args: StoryPlaygroundState['values']) => React.ReactNode;
}> = ({ children }) => {
  const [state] = useStoryPlayground();

  return children(state.values);
};
