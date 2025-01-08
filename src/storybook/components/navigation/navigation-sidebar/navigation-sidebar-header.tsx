import { IconButton } from '@/components';
import { IconMoon, IconSun } from '@tabler/icons-react';
import React from 'react';
import { NavLink } from 'react-router';

export const NavigationSidebarHeader: React.FC = () => {
  const [theme, setTheme] = React.useState<'light' | 'dark'>(
    (localStorage.getItem('theme') || 'light') as 'light' | 'dark',
  );

  React.useEffect(() => {
    document.body.classList.remove('dark', 'light');
    document.body.classList.add(theme);
    document.body.style.colorScheme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <section className="flex items-center gap-md p-sm">
      <NavLink className="flex-1" to="/" end>
        <p className="typography-title-medium">@bruhabruh/ui</p>
        <p className="typography-label-small text-secondary">v2.0.0</p>
      </NavLink>
      <IconButton
        color="secondary"
        onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? <IconMoon key={theme} /> : <IconSun key={theme} />}
      </IconButton>
    </section>
  );
};
