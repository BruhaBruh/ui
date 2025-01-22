import { cn } from '@/utility';
import { IconChevronUp, IconFile, IconFolder } from '@tabler/icons-react';
import { motion } from 'motion/react';
import React from 'react';
import { NavLink } from 'react-router';
import { NavigationNode } from '../navigation.types';

export const NavigationTreeNode: React.FC<NavigationNode> = (node) => {
  const [isOpen, setIsOpen] = React.useState(true);

  if (node.type === 'folder') {
    return (
      <section className="flex flex-col">
        <button
          onClick={() => setIsOpen((p) => !p)}
          className="flex items-center gap-2xs rounded-3xs border-none p-2xs outline-none hover:bg-surface-container-high [&>svg]:size-4"
        >
          {node.icon ?? <IconFolder />}
          <span className="typography-label-large">{node.text}</span>
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
          className={cn(
            'ml-xs flex flex-col overflow-hidden',
            isOpen ? 'h-max' : 'h-0',
          )}
        >
          {node.children.map((n, index) => (
            <NavigationTreeNode key={n.type + index} {...n} />
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
        className="flex items-center gap-2xs rounded-3xs border-none p-2xs outline-none hover:bg-surface-container-high [&>svg]:size-4"
      >
        {node.icon ?? <IconFile />}
        <span className="typography-label-large">{node.text}</span>
      </NavLink>
    );
  }

  return null;
};
