import { materialDuration, materialEasing } from '@/config';
import { cn } from '@/utility';
import { AnimatePresence, motion } from 'motion/react';
import type React from 'react';
import type { ExtendedFabProps } from '../extended-fab.types';
import { extendedFabVariants } from '../extended-fab.variants';

export const InternalExtendedFabLabel: React.FC<
  React.PropsWithChildren<{
    asFab: NonNullable<ExtendedFabProps['asFab']>;
    className?: string;
  }>
> = ({ asFab, className, children }) => {
  return (
    <AnimatePresence mode="wait">
      {children && (
        <motion.span
          key={`${asFab}`}
          initial={{ width: 0, opacity: 0 }}
          animate={{
            width: 'max-content',
            opacity: 1,
          }}
          exit={{ width: 0, opacity: 0 }}
          transition={{
            duration: materialDuration.asMotion('medium-1'),
            ease: materialEasing['standard'],
          }}
          className={cn(extendedFabVariants.label({ asFab }), className)}
        >
          {children}
        </motion.span>
      )}
    </AnimatePresence>
  );
};
