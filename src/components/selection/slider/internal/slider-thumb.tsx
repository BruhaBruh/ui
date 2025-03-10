import { materialDuration, materialEasing } from '@/config';
import { useMergedRefs } from '@/hooks';
import type { AriaProps } from '@/types';
import { cn } from '@/utility';
import type { VariantProps } from 'class-variance-authority';
import { AnimatePresence, motion } from 'motion/react';
import React from 'react';
import type { AriaSliderThumbOptions } from 'react-aria';
import { useSliderThumb } from 'react-aria';
import type { SliderState } from 'react-stately';
import { sliderVariants } from '../slider.variants';

export type SliderThumbProps = Omit<
  AriaProps<'input', AriaSliderThumbOptions>,
  'inputRef' | 'index'
> & {
  state: SliderState;
  index: number;
} & VariantProps<typeof sliderVariants.thumb>;

export const SliderThumb = React.forwardRef<HTMLInputElement, SliderThumbProps>(
  ({ color, trackRef, state, index = 0, name }, forwardedRef) => {
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
        <AnimatePresence mode="wait">
          {isDragging && (
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
          )}
        </AnimatePresence>
      </section>
    );
  },
);
SliderThumb.displayName = 'SliderThumb';
