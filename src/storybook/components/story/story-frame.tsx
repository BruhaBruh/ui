import type { Props } from '@/types';
import { cn } from '@/utility';
import type React from 'react';

export const StoryFrame: React.FC<Props<'section'>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <section
      {...props}
      className={cn(
        'relative mb-sm flex min-h-64 items-center justify-center gap-md rounded-lg border p-lg border-outline',
        className,
      )}
    >
      {children}
    </section>
  );
};
