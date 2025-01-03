import { Large, Subtitle, Title } from '@/storybook/components';
import { navigationRoutes } from '@/storybook/routes';
import { cn } from '@/utility';
import React from 'react';
import { NavLink } from 'react-router';

export const HomePage: React.FC = () => {
  return (
    <section className="mx-auto w-full max-w-prose">
      <Title>Home Page</Title>
      <div className="grid grid-cols-3 gap-sm">
        {navigationRoutes.map((data, i) => {
          if (data.type === 'label')
            return (
              <Subtitle key={i} className="col-span-full">
                {data.text}
              </Subtitle>
            );

          if (data.type === 'sublabel')
            return (
              <Large key={i} className="col-span-full">
                {data.text}
              </Large>
            );

          return (
            <NavLink
              key={i}
              to={data.href}
              end
              className={({ isActive }) =>
                cn(
                  'flex items-center justify-center rounded-lg border-2 border-transparent px-md py-sm typography-headline-small duration-short-4 hover:bg-surface-container',
                  isActive && 'border-outline-variant',
                )
              }
            >
              {data.text}
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};
