'use client';

import { materialDuration, materialEasing } from '@/config';
import { cn } from '@/utility';
import { motion } from 'motion/react';
import React from 'react';
import { iconButtonIconVariants } from '../icon-button.variants';

export const IconButtonIcon: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const ref = React.useRef<HTMLElement>(null);

  return (
    <motion.span
      ref={ref}
      initial={{ width: 0, height: 0, opacity: 0 }}
      animate={{
        width: 'var(--spacing-6)',
        height: 'var(--spacing-6)',
        opacity: 1,
      }}
      exit={{ width: 0, height: 0, opacity: 0 }}
      transition={{
        duration: materialDuration.asMotion('medium-1'),
        ease: materialEasing['standard'],
      }}
      className={cn('icon-button--icon', iconButtonIconVariants())}
    >
      {children}
    </motion.span>
  );
};
