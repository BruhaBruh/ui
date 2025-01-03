'use client';

import { materialDuration, materialEasing } from '@/config';
import { cn } from '@/utility';
import { motion } from 'motion/react';
import React from 'react';
import { ExtendedFabProps } from '../extended-fab.types';

export const ExtendedFabInternalIcon: React.FC<
  React.PropsWithChildren<Pick<ExtendedFabProps, 'asFab'>>
> = ({ asFab, children }) => {
  const ref = React.useRef<HTMLElement>(null);

  return (
    <motion.span
      ref={ref}
      initial={{ width: 0, height: 0, opacity: 0, marginRight: 0 }}
      animate={{
        width: 'var(--spacing-6)',
        height: 'var(--spacing-6)',
        opacity: 1,
        transition: {
          duration: materialDuration.asMotion('medium-1'),
          ease: materialEasing['standard'],
        },
        marginRight: asFab ? 0 : 'var(--spacing-xs)',
      }}
      exit={{ width: 0, height: 0, opacity: 0, marginRight: 0 }}
      className={cn(
        'extended-fab--icon relative inline-block overflow-hidden empty:hidden [&>*]:absolute [&>*]:inset-0 [&>*]:size-full',
      )}
    >
      {children}
    </motion.span>
  );
};
