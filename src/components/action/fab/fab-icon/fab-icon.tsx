'use client';

import { materialDuration, materialEasing } from '@/config';
import { cn } from '@/utility';
import { motion } from 'motion/react';
import React from 'react';
import { FabProps } from '../fab.types';
import { fabIconVariants } from '../fab.variants';

const sizes = {
  sm: 'var(--spacing-6)',
  md: 'var(--spacing-6)',
  lg: 'var(--spacing-9)',
} as const;

export const FabIcon: React.FC<
  React.PropsWithChildren<{ size: NonNullable<FabProps['size']> }>
> = ({ size, children }) => {
  const ref = React.useRef<HTMLElement>(null);

  return (
    <motion.span
      ref={ref}
      initial={{ width: 0, height: 0, opacity: 0 }}
      animate={{
        width: sizes[size],
        height: sizes[size],
        opacity: 1,
      }}
      exit={{ width: 0, height: 0, opacity: 0 }}
      transition={{
        duration: materialDuration.asMotion('medium-1'),
        ease: materialEasing['standard'],
      }}
      className={cn('fab--icon', fabIconVariants({ size }))}
    >
      {children}
    </motion.span>
  );
};
