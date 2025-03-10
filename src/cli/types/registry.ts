export type Registry = {
  dependencies: string[];
  devDependencies: string[];
  files: {
    name: string;
    content: string;
    type:
      | 'index'
      | 'components'
      | 'hooks'
      | 'config'
      | 'tailwind'
      | 'types'
      | 'utility';
  }[];
};
