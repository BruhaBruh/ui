export type Registry = {
  dependencies: string[];
  devDependencies: string[];
  files: {
    name: string;
    content: string;
    type: 'components' | 'hooks' | 'config' | 'tailwind' | 'types' | 'utility';
  }[];
};
