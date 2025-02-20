'use client';

import { useMergedRefs } from '@/hooks';
import { cn } from '@/utility';
import { useNumberFormatter, useSlider } from 'react-aria';
import { useSliderState } from 'react-stately';
import { SliderThumb } from './internal';
import { SliderProps } from './slider.types';
import { sliderVariants } from './slider.variants';

export const Slider: React.FC<SliderProps> = ({
  color,
  variant = 'continuous',
  className,
  minValue = 0,
  maxValue = 100,
  step,
  ref: forwardedRef,
  ...props
}) => {
  const ref = useMergedRefs(forwardedRef);
  const numberFormatter = useNumberFormatter(props.formatOptions);
  const state = useSliderState({
    ...props,
    minValue,
    maxValue,
    numberFormatter,
  });

  const { groupProps, trackProps, labelProps, outputProps } = useSlider(
    props,
    state,
    ref,
  );

  const percent = state.values.map((v) =>
    Math.floor(state.getValuePercent(v) * 100),
  );

  return (
    <section
      {...groupProps}
      className={cn(sliderVariants({ color }), className)}
      data-is-disabled={state.isDisabled}
    >
      {props.label && (
        <section className={cn(sliderVariants.label())}>
          <label {...labelProps}>{props.label}</label>
          <output {...outputProps}>
            {state.values
              .map((_, index) => state.getThumbValueLabel(index))
              .join(' - ')}
          </output>
        </section>
      )}
      <section {...trackProps} className={cn(sliderVariants.track())} ref={ref}>
        {state.values.map((_, i) => (
          <SliderThumb
            key={i}
            index={i}
            state={state}
            trackRef={ref}
            color={color}
          />
        ))}
        <section
          style={{
            width: `calc(${percent[0]}% - 8px)`,
          }}
          className={cn(
            percent.length === 2 || variant === 'centered'
              ? sliderVariants.inactiveTrack({ position: 'left', color })
              : sliderVariants.activeTrack({ position: 'left', color }),
          )}
        />
        {percent.length === 2 && (
          <section
            style={{
              width: `calc(100% - (100% - ${percent[1]}%) - ${percent[0]}% - 16px)`,
            }}
            className={cn(sliderVariants.activeTrack({ color }))}
          >
            {step === undefined && (
              <span className="absolute right-1.5 size-1 rounded-full bg-primary" />
            )}
          </section>
        )}
        <section
          style={{
            width: `calc(100% - ${percent[1] ?? percent[0]}% - 8px)`,
          }}
          className={cn(
            sliderVariants.inactiveTrack({ position: 'right', color }),
          )}
        />
      </section>
    </section>
  );
};
