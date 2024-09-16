import { cn } from '@/utility';
import React from 'react';

const ElevationPlate: React.FC<{
  elevation: string;
}> = ({ elevation }) => {
  return (
    <div
      className={cn(
        'p-3 aspect-square typography-h4 flex items-center justify-center',
        `elevation-${elevation}`,
      )}
    >
      {elevation.toUpperCase()}
    </div>
  );
};

export const ElevationPresentation: React.FC<{
  elevations: string[];
}> = ({ elevations }) => {
  return (
    <div className="grid grid-cols-6 gap-6 mb-8">
      {elevations.map((elevation) => (
        <ElevationPlate key={elevation} elevation={elevation} />
      ))}
    </div>
  );
};
