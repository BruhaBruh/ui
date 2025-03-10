import { materialDuration, materialEasing } from '@/config';
import { cn, keyFromChildren } from '@/utility';
import type { VariantProps } from 'class-variance-authority';
import { AnimatePresence, motion } from 'motion/react';
import type React from 'react';
import { fieldVariants } from '../field.variants';

export const InternalFieldIcon: React.FC<
  React.PropsWithChildren<{
    className?: string;
  }> &
    VariantProps<typeof fieldVariants.icon>
> = ({ position, className, children }) => {
  return (
    <AnimatePresence mode="sync">
      {children && (
        <motion.span
          key={keyFromChildren(children)}
          initial={{
            width: 0,
            height: 0,
            opacity: 0,
            marginRight: 0,
            marginLeft: 0,
          }}
          animate={{
            width: 'var(--spacing-6)',
            height: 'var(--spacing-6)',
            marginRight: position === 'left' ? 'var(--spacing-sm)' : 0,
            marginLeft: position === 'right' ? 'var(--spacing-sm)' : 0,
            opacity: 1,
          }}
          exit={{
            width: 0,
            height: 0,
            opacity: 0,
            marginRight: 0,
            marginLeft: 0,
          }}
          transition={{
            duration: materialDuration.asMotion('medium-1'),
            ease: materialEasing['standard'],
          }}
          className={cn(fieldVariants.icon({ position }), className)}
        >
          {children}
        </motion.span>
      )}
    </AnimatePresence>
  );
};
