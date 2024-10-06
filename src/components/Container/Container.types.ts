import { Props, PropsWithAsChild } from '@/types';
import { VariantProps } from 'class-variance-authority';
import { containerWrapperVariants } from './Container.variants';

export type ContainerProps = PropsWithAsChild<'section'> &
  VariantProps<typeof containerWrapperVariants> & {
    containerProps?: Props<'section'>;
    fluid?: boolean;
  };
