import { materialDuration, materialEasing } from '@/config';
import { cn, keyFromChildren } from '@/utility';
import { AnimatePresence, motion } from 'motion/react';
import type React from 'react';
import { buttonVariants } from '../button.variants';

export const InternalButtonIcon: React.FC<
  React.PropsWithChildren<{
    className?: string;
  }>
> = ({ className, children }) => {
  return (
    <AnimatePresence mode="wait">
      {children && (
        <motion.span
          key={keyFromChildren(children)}
          initial={{ width: 0, height: 0, opacity: 0 }}
          animate={{
            width: 'var(--spacing-4h)',
            height: 'var(--spacing-4h)',
            opacity: 1,
          }}
          exit={{ width: 0, height: 0, opacity: 0 }}
          transition={{
            duration: materialDuration.asMotion('medium-1'),
            ease: materialEasing['standard'],
          }}
          className={cn(buttonVariants.icon(), className)}
        >
          {children}
        </motion.span>
      )}
    </AnimatePresence>
  );
};
