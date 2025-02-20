'use client';

import { materialDuration, materialEasing } from '@/config';
import { useMergedRefs } from '@/hooks';
import { AriaProps } from '@/types';
import { cn } from '@/utility';
import { VariantProps } from 'class-variance-authority';
import { AnimatePresence, motion } from 'motion/react';
import { AriaSliderThumbOptions, useSliderThumb } from 'react-aria';
import { SliderState } from 'react-stately';
import { sliderVariants } from '../slider.variants';

export const SliderThumb: React.FC<
  Omit<AriaProps<'input', AriaSliderThumbOptions>, 'inputRef' | 'index'> & {
    state: SliderState;
    index: number;
  } & VariantProps<typeof sliderVariants.thumb>
> = ({ color, trackRef, state, index = 0, name, ref: forwardedRef }) => {
  const ref = useMergedRefs(forwardedRef);
  const { thumbProps, inputProps, isDragging } = useSliderThumb(
    {
      index,
      trackRef,
      inputRef: ref,
      name,
    },
    state,
  );

  return (
    <section
      {...thumbProps}
      className={cn(sliderVariants.thumb({ color, isDragging }))}
    >
      <input {...inputProps} ref={ref} className="sr-only" />
      {isDragging && (
        <AnimatePresence mode="popLayout">
          <motion.section
            initial={{
              scale: 0,
              translateX: '-50%',
              translateY: '25%',
            }}
            animate={{
              scale: 1,
              translateX: '-50%',
              translateY: 'calc(-1 * var(--spacing-1))',
            }}
            exit={{
              scale: 0,
              translateX: '-50%',
              translateY: '25%',
            }}
            transition={{
              duration: materialDuration.asMotion('medium-1'),
              ease: materialEasing['standard'],
            }}
            className={cn(sliderVariants.tooltip())}
          >
            {state.values[index]}
          </motion.section>
        </AnimatePresence>
      )}
    </section>
  );
};
