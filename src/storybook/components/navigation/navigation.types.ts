export type NavigationNode = (
  | {
      type: 'folder';
      children: NavigationNode[];
    }
  | {
      type: 'page';
      page: React.ReactNode;
    }
) & {
  href: string;
  text: string;
  icon?: React.ReactNode;
};
