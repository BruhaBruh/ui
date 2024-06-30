import React from 'react';

const сombinations = <T extends string>(
  options: Record<T, unknown[]>,
): Record<T, unknown>[] => {
  const keys = Object.keys(options);
  const combinations: Record<string, unknown[]>[] = [];

  const combination = (current: Record<string, unknown[]>, depth: number) => {
    if (depth === keys.length) {
      combinations.push(current);

      return;
    }

    const key = keys[depth] as T;

    options[key].forEach((value) => {
      combination({ ...current, [key]: value as unknown[] }, depth + 1);
    });
  };

  combination({}, 0);

  return combinations;
};

export const Combinations: React.FC<{
  args: Record<string, unknown[]>;
  component: React.FC<Record<string, unknown>>;
  columns?: number;
}> = ({ args, columns = 12, component: Component }) => {
  const allCombinations = React.useMemo(() => сombinations(args), [args]);

  return (
    <div className="grid gap-4">
      {Object.entries(args).map(([arg, values]) =>
        values.map((value) => (
          <div key={arg + value} className="grid gap-2">
            <p className="text-xl font-bold">
              {arg} {value as React.ReactNode}
            </p>
            <div
              className="grid gap-2 items-center justify-center"
              style={{
                gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
              }}
            >
              {allCombinations
                .filter((props) => props[arg] === value)
                .map((props, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <Component key={index} {...props} />
                ))}
            </div>
          </div>
        )),
      )}
    </div>
  );
};
