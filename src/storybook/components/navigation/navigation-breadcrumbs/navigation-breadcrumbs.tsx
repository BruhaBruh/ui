import { Breadcrumbs, BreadcrumbsItem } from '@/components';
import { cn } from '@/utility';
import type React from 'react';
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
    <Breadcrumbs className="mx-auto mb-sm w-full max-w-screen-lg">
      <BreadcrumbsItem asChild isActive={location.pathname === '/'}>
        <Link to={'/'}>Home</Link>
      </BreadcrumbsItem>
      {nodes.map((node) => (
        <BreadcrumbsItem
          key={node.href}
          asChild
          isActive={location.pathname === node.href}
        >
          <Link to={node.href}>{node.text}</Link>
        </BreadcrumbsItem>
      ))}
    </Breadcrumbs>
  );
};
