import { cn } from '@/utility';
import React from 'react';

const BorderPlate: React.FC<{
  border: string;
}> = ({ border }) => {
  return (
    <div
      className={cn(
        'p-3 aspect-video border-4 rounded-lg typography-h4 flex items-center justify-center',
        `border-${border}`,
      )}
    >
      {border[0].toUpperCase() + border.slice(1)}
    </div>
  );
};

export const BorderPresentation: React.FC<{
  borders: string[];
}> = ({ borders }) => {
  return (
    <div className="mb-4 grid grid-cols-2 gap-4">
      <div className="grid grid-cols-3 gap-4 p-4 bg-background text-foreground rounded-xl border border-primary">
        {borders.map((border) => (
          <BorderPlate key={border} border={border} />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4 p-4 dark bg-background text-foreground rounded-xl border border-primary">
        {borders.map((border) => (
          <BorderPlate key={border} border={border} />
        ))}
      </div>
    </div>
  );
};
