import { materialDuration, materialEasing } from '@/config';
import { cn, keyFromChildren } from '@/utility';
import { AnimatePresence, motion } from 'motion/react';
import React from 'react';
import { ExtendedFabProps } from '../extended-fab.types';
import { extendedFabVariants } from '../extended-fab.variants';

export const InternalExtendedFabIcon: React.FC<
  React.PropsWithChildren<{
    asFab: NonNullable<ExtendedFabProps['asFab']>;
    className?: string;
  }>
> = ({ asFab, className, children }) => {
  return (
    <AnimatePresence mode="wait">
      {children && (
        <motion.span
          key={keyFromChildren(children)}
          initial={{ width: 0, height: 0, opacity: 0 }}
          animate={{
            width: 'var(--spacing-6)',
            height: 'var(--spacing-6)',
            opacity: 1,
            marginRight: asFab ? 0 : 'var(--spacing-xs)',
          }}
          exit={{ width: 0, height: 0, opacity: 0 }}
          transition={{
            duration: materialDuration.asMotion('medium-1'),
            ease: materialEasing['standard'],
          }}
          className={cn(extendedFabVariants.icon(), className)}
        >
          {children}
        </motion.span>
      )}
    </AnimatePresence>
  );
};
