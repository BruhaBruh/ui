'use client';

import React, { useId } from 'react';

export const useComputedStyle = <T extends string | number | undefined>({
  css,
  ref,
  defaultValue,
}: {
  css: string;
  ref?: React.RefObject<HTMLElement | undefined | null>;
  defaultValue?: T;
}) => {
  const [computedValue, setComputedValue] = React.useState<T>(
    defaultValue as T,
  );
  const id = useId();

  React.useEffect(() => {
    let el: HTMLElement;
    if (ref) {
      if (!ref.current) return;
      el = ref.current;
    } else {
      if (typeof window === 'undefined') return;
      el = document.body;
    }
    const variable = `--computed-var-${id}`;
    el.style.setProperty(variable, css);

    const computed = getComputedStyle(el);
    const value = computed
      .getPropertyValue(variable)
      .replace(/\/\*[^*]+\*\//g, '')
      .trim();

    const valueAsNumber = Number(value);
    if (Number.isNaN(valueAsNumber)) {
      setComputedValue(value as T);
    } else {
      setComputedValue(valueAsNumber as T);
    }
    el.style.removeProperty(variable);
  }, [css, id, ref]);

  return computedValue;
};
