import { cn } from '@/utility';
import React from 'react';

const RadiusPlate: React.FC<{
  radius: string;
}> = ({ radius }) => {
  return (
    <div
      className={cn(
        'p-3 aspect-square border border-primary typography-h4 flex items-center justify-center',
        `rounded-${radius}`,
      )}
    >
      {radius.toUpperCase()}
    </div>
  );
};

export const RadiusPresentation: React.FC<{
  radiuses: string[];
}> = ({ radiuses }) => {
  return (
    <div className="grid grid-cols-6 gap-6 mb-8">
      {radiuses.map((radius) => (
        <RadiusPlate key={radius} radius={radius} />
      ))}
    </div>
  );
};
