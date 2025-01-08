export type NavigationNode = (
  | {
      type: 'folder';
      children: NavigationNode[];
    }
  | {
      type: 'page';
    }
) & {
  href: string;
  text: string;
  icon?: React.ReactNode;
};
