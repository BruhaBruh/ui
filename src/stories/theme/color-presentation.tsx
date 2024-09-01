import { cn } from '@/utility';
import React from 'react';

const ColorPlate: React.FC<{
  label: string;
  color: string;
  className: string;
}> = ({ label, color, className }) => {
  return (
    <div
      className={cn(
        'py-3 px-2 rounded-md min-w-24 flex-1 border border-primary typography-large flex items-center justify-center',
        `bg-${color}-${label}`,
        className,
      )}
    >
      {label}
    </div>
  );
};

export const ColorPresentation: React.FC<{
  color: string;
  text: [variant: string, className: string][];
}> = ({ color, text }) => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-8">
      <div className="flex items-start justify-center flex-wrap gap-2 bg-background text-foreground border border-primary p-4 rounded-xl">
        <h3 className="typography-h3 w-full">On Light</h3>
        {text.map(([variant, textClassName]) => (
          <ColorPlate
            key={`${color}-${variant}`}
            color={color}
            label={variant}
            className={textClassName}
          />
        ))}
      </div>
      <div className="dark flex items-start justify-center flex-wrap gap-2 bg-background text-foreground border border-primary p-4 rounded-xl">
        <h3 className="typography-h3 w-full">On Dark</h3>
        {text.map(([variant, textClassName]) => (
          <ColorPlate
            key={`${color}-${variant}`}
            color={color}
            label={variant}
            className={textClassName}
          />
        ))}
      </div>
    </div>
  );
};
