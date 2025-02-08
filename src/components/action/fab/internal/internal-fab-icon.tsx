import { materialDuration, materialEasing } from '@/config';
import { cn, keyFromChildren } from '@/utility';
import { AnimatePresence, motion } from 'motion/react';
import React from 'react';
import { FabProps } from '../fab.types';
import { fabVariants } from '../fab.variants';

const sizes = {
  sm: 'var(--spacing-6)',
  md: 'var(--spacing-6)',
  lg: 'var(--spacing-9)',
} as const;

export const InternalFabIcon: React.FC<
  React.PropsWithChildren<{
    size: NonNullable<FabProps['size']>;
    className?: string;
  }>
> = ({ size, className, children }) => {
  return (
    <AnimatePresence mode="wait">
      {children && (
        <motion.span
          key={keyFromChildren(children)}
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
          className={cn(fabVariants.icon(), className)}
        >
          {children}
        </motion.span>
      )}
    </AnimatePresence>
  );
};
