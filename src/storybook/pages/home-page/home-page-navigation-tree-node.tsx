import { Large, NavigationNode } from '@/storybook/components';
import { cn } from '@/utility';
import { IconChevronUp, IconFile, IconFolder } from '@tabler/icons-react';
import { motion } from 'motion/react';
import React from 'react';
import { NavLink } from 'react-router';

export const HomePageNavigationTreeNode: React.FC<NavigationNode> = (node) => {
  const [isOpen, setIsOpen] = React.useState(true);

  if (node.type === 'folder') {
    return (
      <section className="flex flex-col">
        <button
          onClick={() => setIsOpen((p) => !p)}
          className="flex items-center gap-xs rounded-md border-none p-sm outline-none hover:bg-surface-container-high [&>svg]:size-6"
        >
          {node.icon ?? <IconFolder />}
          <Large className="!pb-0">{node.text}</Large>
          <IconChevronUp
            className={cn(
              'easing-medium-1 ml-auto transition duration-short-2',
              isOpen && '-rotate-180',
            )}
          />
        </button>
        <motion.section
          animate={
            {
              true: 'open',
              false: 'closed',
            }[`${isOpen}`]
          }
          variants={{
            open: {
              height: 'max-content',
              opacity: 1,
            },
            closed: {
              height: 0,
              opacity: 0,
            },
          }}
          className="ml-md flex flex-col overflow-hidden"
        >
          {node.children.map((n, index) => (
            <HomePageNavigationTreeNode
              key={n.type + index}
              {...n}
              href={node.href + n.href}
            />
          ))}
        </motion.section>
      </section>
    );
  }

  if (node.type === 'page') {
    return (
      <NavLink
        to={node.href}
        onClick={() => setIsOpen((p) => !p)}
        className="flex items-center gap-xs rounded-md border-none p-sm outline-none hover:bg-surface-container-high [&>svg]:size-6"
      >
        {node.icon ?? <IconFile />}
        <Large className="!pb-0">{node.text}</Large>
      </NavLink>
    );
  }

  return null;
};
