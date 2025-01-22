import React from 'react';

export const useDebounced = <T>(value: T, ms = 200): T => {
  const [debounced, setDebounced] = React.useState(value);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounced(value);
    }, ms);
    return () => clearTimeout(timeout);
  }, [value, ms]);

  return debounced;
};
