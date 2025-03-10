import { materialDuration, materialEasing } from '@/config';
import { useMergedRefs } from '@/hooks';
import { cn, mergeProps } from '@/utility';
import { motion } from 'motion/react';
import React from 'react';
import { useDialog } from 'react-aria';
import type { DialogProps } from './dialog.types';
import { dialogVariants } from './dialog.variants';

const DialogImpl = React.forwardRef<HTMLElement, DialogProps>(
  ({ className, children, ...props }, forwardedRef) => {
    const ref = useMergedRefs(forwardedRef);
    const { dialogProps } = useDialog(props, ref);

    return (
      <motion.section
        {...(mergeProps(props, dialogProps) as Record<string, unknown>)}
        initial={{
          opacity: 0,
          y: '100%',
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: '100%',
        }}
        transition={{
          duration: materialDuration.asMotion('long-1'),
          ease: materialEasing['standard'],
        }}
        className={cn(dialogVariants(), className)}
        ref={ref}
      >
        {children}
      </motion.section>
    );
  },
);
DialogImpl.displayName = 'Dialog';

export const Dialog = DialogImpl;
