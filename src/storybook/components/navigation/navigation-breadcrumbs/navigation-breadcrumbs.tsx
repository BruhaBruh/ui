import { cn } from '@/utility';
import { IconChevronRight } from '@tabler/icons-react';
import React from 'react';
import { Link, useLocation } from 'react-router';
import { useNavigationNodesByHref } from '../navigation.context';

const Breadcrumb: React.FC<
  React.PropsWithChildren<{
    href: string;
  }>
> = ({ href, children }) => {
  const location = useLocation();

  return (
    <Link
      to={href}
      className={cn(
        'typography-label-large hover:underline',
        {
          true: ['text-on-surface'],
          false: ['text-on-surface-variant hover:text-on-surface'],
        }[`${location.pathname === href}`],
      )}
    >
      {children}
    </Link>
  );
};

export const NavigationBreadcrumbs: React.FC = () => {
  const location = useLocation();
  const nodes = useNavigationNodesByHref(location.pathname);

  return (
    <section className="mx-auto mb-sm flex w-full max-w-screen-lg items-center gap-2xs">
      <Breadcrumb href="/">Home</Breadcrumb>
      {nodes.length > 0 && <IconChevronRight className="size-4" />}
      {nodes.map((node, index, arr) => (
        <React.Fragment key={node.href}>
          <Breadcrumb href={node.href}>{node.text}</Breadcrumb>
          {index + 1 < arr.length && <IconChevronRight className="size-4" />}
        </React.Fragment>
      ))}
    </section>
  );
};
