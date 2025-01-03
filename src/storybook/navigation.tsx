import { cn } from '@/utility';
import { IconCategory, IconFile, IconFolder } from '@tabler/icons-react';
import React from 'react';
import { NavLink } from 'react-router';
import { navigationRoutes } from './routes';

export const Navigation: React.FC = () => {
  return (
    <nav className="flex flex-col gap-xs overflow-y-scroll px-sm">
      <p className="typography-title-medium">Stories</p>
      {navigationRoutes.map((data, i) => {
        if (data.type === 'label')
          return (
            <p
              key={i}
              className="flex items-center gap-xs typography-label-large"
            >
              {data.icon || <IconFolder className="size-4" />}
              {data.text}
            </p>
          );
        if (data.type === 'sublabel')
          return (
            <p
              key={i}
              className="color-secondary flex items-center gap-xs pl-sm typography-label-medium"
            >
              {data.icon || <IconCategory className="size-4" />}
              {data.text}
            </p>
          );

        return (
          <NavLink
            key={i}
            to={data.href}
            end
            className={({ isActive }) =>
              cn(
                'flex items-center gap-xs',
                'rounded-sm border-2 border-transparent px-sm py-xs typography-label-large duration-short-4 hover:bg-surface-container-high',
                isActive && 'border-outline-variant',
              )
            }
          >
            {data.icon || <IconFile className="size-4" />}
            {data.text}
          </NavLink>
        );
      })}
    </nav>
  );
};
