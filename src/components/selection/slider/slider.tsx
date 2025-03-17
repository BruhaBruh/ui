import { useMergedRefs } from '@/hooks';
import { cn } from '@/utility';
import React from 'react';
import { useNumberFormatter, useSlider } from 'react-aria';
import { useSliderState } from 'react-stately';
import { SliderThumb } from './internal';
import type { SliderProps } from './slider.types';
import { sliderVariants } from './slider.variants';

export const Slider = React.forwardRef<HTMLElement, SliderProps>(
  (
    {
      isActiveThumb = (index, withMultipleThumbs) => {
        return withMultipleThumbs ? index % 2 === 1 : index === 0;
      },
      color,
      variant = 'continuous',
      className,
      minValue = 0,
      maxValue = 100,
      step,
      ...props
    },
    forwardedRef,
  ) => {
    const ref = useMergedRefs(forwardedRef);
    const numberFormatter = useNumberFormatter(props.formatOptions);
    const state = useSliderState({
      ...props,
      minValue,
      maxValue,
      step,
      numberFormatter,
    });

    const { groupProps, trackProps, labelProps, outputProps } = useSlider(
      props,
      state,
      ref,
    );

    const percent = state.values.map((v) =>
      Number.parseFloat((state.getValuePercent(v) * 100).toFixed(2)),
    );

    const trackStyles = Array(percent.length + 1)
      .fill(null)
      .map((_, index, arr) => {
        const percentBefore = percent[index - 1] ?? 0;
        let currentTrackPercent = percent[index] - percentBefore;
        const isFirst = index === 0;
        const isLast = index + 1 === arr.length;
        const inCenter = !isFirst && !isLast;
        if (isLast) {
          currentTrackPercent = 100 - percentBefore;
        }

        return {
          width: `calc(${currentTrackPercent}% - ${inCenter ? '16px' : '8px'})`,
          left: isFirst ? '0%' : `calc(${percentBefore}% + 8px)`,
        };
      });

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
        <section
          {...trackProps}
          className={cn(sliderVariants.track())}
          ref={ref}
        >
          {state.values.map((_, i) => (
            <SliderThumb
              key={i}
              index={i}
              state={state}
              trackRef={ref}
              color={color}
              formatter={numberFormatter}
            />
          ))}
          {trackStyles.map((style, index, arr) => {
            const isFirst = index === 0;
            const isLast = index + 1 === arr.length;
            const withMultipleThumbs = arr.length !== 2;

            let position: 'center' | 'right' | 'left' = 'center';
            if (isFirst) position = 'left';
            if (isLast) position = 'right';

            return (
              <section
                key={index}
                style={style}
                className={cn(
                  variant === 'continuous' &&
                    isActiveThumb(index, withMultipleThumbs)
                    ? sliderVariants.activeTrack({
                        position,
                        color,
                      })
                    : sliderVariants.inactiveTrack({
                        position,
                        color,
                      }),
                )}
              />
            );
          })}

          {/* {trackWidth.length === 3 && (
            <section
              style={{
                width: trackWidth[1],
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
              width: trackWidth[2] ?? trackWidth[1],
            }}
            className={cn(
              sliderVariants.inactiveTrack({ position: 'right', color }),
            )}
          /> */}
        </section>
      </section>
    );
  },
);
Slider.displayName = 'Slider';
