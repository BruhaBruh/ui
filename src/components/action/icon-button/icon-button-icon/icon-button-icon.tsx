'use client';

import { materialDuration, materialEasing } from '@/config';
import { motion } from 'motion/react';
import React from 'react';

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
        transition: {
          duration: materialDuration.asMotion('medium-1'),
          ease: materialEasing['standard'],
        },
      }}
      exit={{ width: 0, height: 0, opacity: 0 }}
      className="icon-button--icon relative inline-block overflow-hidden empty:hidden [&>*]:absolute [&>*]:inset-0 [&>*]:size-full"
    >
      {children}
    </motion.span>
  );
};
