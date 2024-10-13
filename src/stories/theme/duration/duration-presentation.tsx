import { cn } from '@/utility';
import React from 'react';

const DurationPlate: React.FC<{
  duration: string;
}> = ({ duration }) => {
  return (
    <div
      className={cn(
        'gap-2xs typography-title-medium group flex flex-col items-center',
      )}
    >
      <div>
        {duration
          .split('-')
          .map((v) => v.charAt(0).toUpperCase() + v.slice(1))
          .join(' ')}
      </div>
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
            `duration-${duration}`,
          )}
        />
      </div>
    </div>
  );
};

export const DurationPresentation: React.FC<{
  durations: string[];
}> = ({ durations }) => {
  return (
    <div className="gap-md flex flex-wrap justify-between">
      {durations.map((duration) => (
        <DurationPlate key={duration} duration={duration} />
      ))}
    </div>
  );
};
