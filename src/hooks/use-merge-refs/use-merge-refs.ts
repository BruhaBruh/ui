'use client';

import React from 'react';

export const useMergedRefs = <T>(
  ...refs: (React.Ref<T> | null | undefined)[]
): React.RefObject<T> => {
  const mergedRef = React.useRef<T>(null);

  React.useEffect(() => {
    refs.forEach((ref) => {
      if (!ref) return;

      if (typeof ref === 'function') {
        ref(mergedRef.current);
      } else {
        // eslint-disable-next-line no-param-reassign
        (ref as React.MutableRefObject<T | null>).current = mergedRef.current;
      }
    });
  }, [refs]);

  return mergedRef as React.RefObject<T>;
};
