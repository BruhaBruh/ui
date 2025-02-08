'use client';

import { useMergedRefs } from '@/hooks';
import { cn } from '@/utility';
import { useSeparator } from 'react-aria';
import { DividerProps } from './divider.types';
import { dividerVariants } from './divider.variants';

export const Divider: React.FC<DividerProps> = ({
  inset,
  orientation = 'horizontal',
  className,
  ref: forwardedRef,
  ...props
}) => {
  const ref = useMergedRefs(forwardedRef);

  const { separatorProps } = useSeparator({ orientation, ...props });

  return (
    <section
      {...separatorProps}
      ref={ref}
      className={cn(dividerVariants({ inset }), className)}
      data-orientation={orientation}
    />
  );
};
