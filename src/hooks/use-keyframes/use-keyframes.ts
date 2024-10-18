'use client';

import React from 'react';

type KeyframeRecord<T extends number> = Record<number, T> & {
  0: T;
  100: T;
};

const interpolate = <T extends number>(
  start: T,
  end: T,
  ratio: number,
): number => start + (end - start) * ratio;

const interpolateKeyFrames = <T extends number>(
  keyframes: KeyframeRecord<T>,
  t: number,
): number | undefined => {
  const normalizedT = t % 1;
  const percent = normalizedT * 100;

  const sortedKeys = Object.keys(keyframes)
    .map(Number)
    .sort((a, b) => a - b);

  for (let i = 0; i < sortedKeys.length; i++) {
    const key1 = sortedKeys[i];
    const key2 = sortedKeys[(i + 1) % sortedKeys.length];

    if (percent >= key1 && (percent <= key2 || key2 < key1)) {
      const startValue = keyframes[key1];
      const endValue = keyframes[key2];
      const ratio = (percent - key1) / ((key2 < key1 ? 100 : key2) - key1);

      // Интерполируем между startValue и endValue
      return interpolate(startValue, endValue, ratio);
    }
  }

  return undefined;
};

const getT = (startTime: number, endTime: number): number => {
  const delta = endTime - startTime;
  const elapsedTime = performance.now() - startTime;
  if (delta <= 0) return 0;
  return Math.min(Math.max(elapsedTime / delta, 0), 1);
};

export const useKeyframes = <T extends number>(
  keyframes: KeyframeRecord<T>,
  {
    duration,
    fn,
    infinite = false,
    easing = (t) => t,
  }: {
    duration: number;
    fn: (value: number) => void;
    infinite?: boolean;
    easing?: (t: number) => number;
  },
) => {
  const isAnimating = React.useRef(false);

  const startAnimation = React.useCallback(() => {
    const startTime = performance.now();

    const animate = () => {
      if (!isAnimating.current) return;
      let t = 0;
      if (infinite) {
        t = ((performance.now() - startTime) / duration) % 1;
      } else {
        t = getT(startTime, startTime + duration);
      }
      const val = interpolateKeyFrames(keyframes, easing(t));
      if (val) fn(val);
      requestAnimationFrame(animate);
    };
    isAnimating.current = true;
    animate();
  }, [duration, easing, fn, infinite, keyframes]);

  const endAnimation = React.useCallback(() => {
    isAnimating.current = false;
  }, []);

  return {
    startAnimation,
    endAnimation,
  };
};
