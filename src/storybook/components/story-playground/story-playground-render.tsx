import type React from 'react';
import type { StoryPlaygroundState } from './story-playground-context';
import { useStoryPlayground } from './story-playground-context';

export const StoryPlaygroundRender: React.FC<{
  children: (args: StoryPlaygroundState['values']) => React.ReactNode;
}> = ({ children }) => {
  const [state] = useStoryPlayground();

  return children(state.values);
};
