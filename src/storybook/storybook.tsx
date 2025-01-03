import { IconMoon, IconSun } from '@tabler/icons-react';
import React from 'react';
import { NavLink } from 'react-router';
import { Navigation } from './navigation';
import { Pages } from './pages';

export const Storybook: React.FC = () => {
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
    <section className="flex h-screen w-screen bg-surface text-on-surface">
      <aside className="text-on-surface-container flex h-screen w-full max-w-64 flex-col items-stretch justify-start elevation-1 bg-surface-container">
        <section className="flex items-center gap-md p-sm">
          <NavLink className="flex-1" to="/" end>
            <p className="typography-title-medium">@bruhabruh/ui</p>
            <p className="typography-label-small text-secondary">v2.0.0</p>
          </NavLink>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="inline-flex size-10 items-center justify-center rounded-full transition easing-standard duration-medium-1 hover:bg-secondary-container hover:text-on-secondary-container"
          >
            {theme === 'dark' ? <IconMoon /> : <IconSun />}
          </button>
        </section>
        <Navigation />
      </aside>
      <main className="flex-1 overflow-y-auto p-lg">
        <Pages />
      </main>
    </section>
  );
};
