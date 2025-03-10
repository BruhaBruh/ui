import type { Props } from '@/types';
import { cn } from '@/utility';
import type React from 'react';
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
        'grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-md',
        className,
      )}
    >
      {Object.entries(state.arguments).map(([name, arg]) => (
        <StoryPlaygroundControl key={name} name={name} arg={arg} />
      ))}
    </section>
  );
};
