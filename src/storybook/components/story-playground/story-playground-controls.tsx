import { Props } from '@/types';
import { cn } from '@/utility';
import React from 'react';
import { useStoryPlayground } from './story-playground-context';
import { StoryPlaygroundControl } from './story-playground-control';

export const StoryPlaygroundControls: React.FC<Props<'section'>> = ({
  className,
  ...props
}) => {
  const [state] = useStoryPlayground();

  return (
    <section
      {...props}
      className={cn(
        'grid grid-cols-[repeat(auto-fill,minmax(min-content,14rem))] gap-md',
        className,
      )}
    >
      {Object.entries(state.arguments).map(([name, arg]) => (
        <StoryPlaygroundControl key={name} name={name} arg={arg} />
      ))}
    </section>
  );
};
