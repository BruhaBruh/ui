import {
  Button,
  Menu,
  MenuContent,
  MenuItem,
  MenuItemLeft,
  MenuItemRight,
  MenuSection,
  MenuTrigger,
} from '@/components';
import { Story, StoryFrame, Subtitle, Title } from '@/storybook/components';
import { IconEye, IconPencil } from '@tabler/icons-react';
import React from 'react';

export const MenuPage: React.FC = () => {
  return (
    <section className="debug-screens mx-auto w-full max-w-screen-lg">
      <Title>Menu</Title>
      <Story className="mb-md">
        <Subtitle>Playground</Subtitle>
        <StoryFrame>
          <Menu>
            <MenuTrigger>
              <Button>Open</Button>
            </MenuTrigger>
            <MenuContent disabledKeys={['item-3']}>
              <MenuSection title="test">
                <MenuItem key="item-1">
                  <MenuItemLeft>
                    <IconEye />
                  </MenuItemLeft>
                  Item 1
                </MenuItem>
                <MenuItem key="item-2">
                  <MenuItemLeft>
                    <span />
                  </MenuItemLeft>
                  Item 2
                  <MenuItemRight>
                    <kbd className="inline-flex items-center justify-center">
                      ⌘V
                    </kbd>
                  </MenuItemRight>
                </MenuItem>
              </MenuSection>
              <MenuSection title="test">
                <MenuItem key="item-3">
                  Item 1
                  <MenuItemRight>
                    <IconPencil />
                  </MenuItemRight>
                </MenuItem>
                <MenuItem key="item-4">Item 4</MenuItem>
              </MenuSection>
            </MenuContent>
          </Menu>
        </StoryFrame>
      </Story>
      <Story className="mb-md">
        <Subtitle>Signle Selection</Subtitle>
        <StoryFrame>
          <Menu>
            <MenuTrigger>
              <Button>Open</Button>
            </MenuTrigger>
            <MenuContent selectionMode="single" disabledKeys={['item-3']}>
              <MenuSection title="test">
                <MenuItem key="item-1">
                  <MenuItemLeft>
                    <IconEye />
                  </MenuItemLeft>
                  Item 1
                </MenuItem>
                <MenuItem key="item-2">
                  <MenuItemLeft>
                    <span />
                  </MenuItemLeft>
                  Item 2
                  <MenuItemRight>
                    <kbd className="inline-flex items-center justify-center">
                      ⌘V
                    </kbd>
                  </MenuItemRight>
                </MenuItem>
              </MenuSection>
              <MenuSection title="test">
                <MenuItem key="item-3">
                  Item 1
                  <MenuItemRight>
                    <IconPencil />
                  </MenuItemRight>
                </MenuItem>
                <MenuItem key="item-4">Item 4</MenuItem>
              </MenuSection>
            </MenuContent>
          </Menu>
        </StoryFrame>
      </Story>
      <Story>
        <Subtitle>Multiple Selection</Subtitle>
        <StoryFrame>
          <Menu>
            <MenuTrigger>
              <Button>Open</Button>
            </MenuTrigger>
            <MenuContent
              selectionMode="multiple"
              selectedKeys={['item-3']}
              disabledKeys={['item-3']}
            >
              <MenuSection title="test">
                <MenuItem key="item-1">
                  <MenuItemLeft>
                    <IconEye />
                  </MenuItemLeft>
                  Item 1
                </MenuItem>
                <MenuItem key="item-2">
                  <MenuItemLeft>
                    <span />
                  </MenuItemLeft>
                  Item 2
                  <MenuItemRight>
                    <kbd className="inline-flex items-center justify-center">
                      ⌘V
                    </kbd>
                  </MenuItemRight>
                </MenuItem>
              </MenuSection>
              <MenuSection title="test">
                <MenuItem key="item-3">
                  Item 1
                  <MenuItemRight>
                    <IconPencil />
                  </MenuItemRight>
                </MenuItem>
                <MenuItem key="item-4">Item 4</MenuItem>
              </MenuSection>
            </MenuContent>
          </Menu>
        </StoryFrame>
      </Story>
    </section>
  );
};
