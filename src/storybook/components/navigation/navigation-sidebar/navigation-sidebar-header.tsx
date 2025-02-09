import { IconButton } from '@/components';
import { IconMoon, IconSun } from '@tabler/icons-react';
import React from 'react';
import { NavLink } from 'react-router';

export const NavigationSidebarHeader: React.FC = () => {
  const [theme, setTheme] = React.useState<'light' | 'dark'>(
    (localStorage.getItem('theme') || 'light') as 'light' | 'dark',
  );

  return (
    <section className="flex items-center gap-md p-sm">
      <NavLink className="flex-1" to="/" end>
        <p className="typography-title-medium">@bruhabruh/ui{theme}</p>
        <p className="typography-label-small text-secondary">v2.0.0</p>
      </NavLink>
      <IconButton
        color="secondary"
        onPress={() =>
          setTheme((p) => {
            const newTheme = p === 'dark' ? 'light' : 'dark';
            if (typeof window === 'undefined') return newTheme;
            document.body.classList.remove('dark', 'light');
            document.body.classList.add(newTheme);
            document.body.style.colorScheme = newTheme;
            localStorage.setItem('theme', newTheme);
            return newTheme;
          })
        }
      >
        {theme === 'dark' && <IconMoon key={theme} />}
        {theme === 'light' && <IconSun key={theme} />}
      </IconButton>
    </section>
  );
};
