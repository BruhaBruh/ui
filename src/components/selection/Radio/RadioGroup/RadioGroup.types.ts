import { PropsWithAsChild } from '@/types';
import { VariantProps } from 'class-variance-authority';
import { AriaRadioGroupProps } from 'react-aria';
import { radioGroupVariants } from './RadioGroup.variants';

export type RadioGroupProps = AriaRadioGroupProps &
  PropsWithAsChild<
    'div',
    Omit<AriaRadioGroupProps, 'children'>,
    'errorMessage'
  > &
  VariantProps<typeof radioGroupVariants> & { errorMessage?: React.ReactNode };
