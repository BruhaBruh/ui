import { cn } from '@/utility';
import React from 'react';

const DurationPlate: React.FC<{
  name: string;
  duration: number;
}> = ({ name, duration }) => {
  return (
    <div
      className={cn(
        'group flex flex-col items-center gap-3xs typography-title-medium',
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
          'flex h-8 w-48 items-center rounded-full border border-outline',
        )}
      >
        <div
          className={cn(
            'transition easing-[linear] size-8 rounded-full bg-secondary',
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
    <div className="flex flex-wrap justify-between gap-md">
      {durations.map(([name, duration]) => (
        <DurationPlate key={duration} name={name} duration={duration} />
      ))}
    </div>
  );
};
