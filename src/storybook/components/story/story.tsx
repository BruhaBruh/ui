import { Props } from '@/types';
import { cn } from '@/utility';
import React from 'react';

export type StoryProps = Props<'section'>;

export const Story: React.FC<StoryProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <section {...props} className={cn('flex flex-col', className)}>
      {children}
    </section>
  );
};
