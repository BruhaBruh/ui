'use client';

import { materialDuration, materialEasing } from '@/config';
import { useTailwindTheme } from '@/context';
import { useComputedStyle } from '@/hooks';
import { motion } from 'motion/react';
import React from 'react';

export const IconWrapper: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const ref = React.useRef<HTMLElement>(null);
  const theme = useTailwindTheme();
  const size = useComputedStyle({
    css: theme.spacing['4.5'],
    defaultValue: '0',
  });

  return (
    <motion.span
      ref={ref}
      initial={{ width: 0, height: 0, opacity: 0 }}
      animate={{
        width: size,
        height: size,
        opacity: 1,
        transition: {
          duration: materialDuration.asMotion('medium-1'),
          ease: materialEasing['emphasized-decelerate'],
        },
      }}
      exit={{ width: 0, height: 0, opacity: 0 }}
      className="size-4.5 relative inline-block overflow-hidden [&>*]:absolute [&>*]:inset-0 [&>*]:size-full"
    >
      {children}
    </motion.span>
  );
};
