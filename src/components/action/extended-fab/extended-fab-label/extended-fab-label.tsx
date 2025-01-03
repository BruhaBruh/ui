'use client';

import { materialDuration, materialEasing } from '@/config';
import { cn } from '@/utility';
import { motion } from 'motion/react';
import React from 'react';
import { ExtendedFabProps } from '../extended-fab.types';
import { extendedFabLabelVariants } from '../extended-fab.variants';

export const ExtendedFabLabel: React.FC<
  React.PropsWithChildren<Pick<ExtendedFabProps, 'asFab'>>
> = ({ children, asFab }) => {
  const ref = React.useRef<HTMLElement>(null);

  return (
    <motion.span
      ref={ref}
      initial={{ width: 0, opacity: 0 }}
      animate={{
        width: 'max-content',
        opacity: 1,
        transition: {
          duration: materialDuration.asMotion('medium-1'),
          ease: materialEasing['standard'],
        },
      }}
      exit={{ width: 0, opacity: 0 }}
      className={cn(
        'extended-fab--label relative inline-block overflow-hidden empty:hidden',
        extendedFabLabelVariants(),
        asFab && 'hidden',
      )}
    >
      {children}
    </motion.span>
  );
};
