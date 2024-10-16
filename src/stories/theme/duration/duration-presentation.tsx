import { cn } from '@/utility';
import React from 'react';

const DurationPlate: React.FC<{
  name: string;
  duration: number;
}> = ({ name, duration }) => {
  return (
    <div
      className={cn(
        'gap-3xs typography-title-medium group flex flex-col items-center',
      )}
    >
      <div>
        {name
          .split('-')
          .map((v) => v.charAt(0).toUpperCase() + v.slice(1))
          .join(' ')}
      </div>
      <div className="typography-label-large">{duration}ms</div>
      <div
        className={cn(
          'border-outline flex h-8 w-48 items-center rounded-full border',
        )}
      >
        <div
          className={cn(
            'bg-secondary size-8 rounded-full transition ease-linear',
            'scale-50',
            'group-hover:translate-x-40',
            'group-hover:scale-100',
            `duration-${name}`,
          )}
        />
      </div>
    </div>
  );
};

export const DurationPresentation: React.FC<{
  durations: [string, number][];
}> = ({ durations }) => {
  return (
    <div className="gap-md flex flex-wrap justify-between">
      {durations.map(([name, duration]) => (
        <DurationPlate key={duration} name={name} duration={duration} />
      ))}
    </div>
  );
};
