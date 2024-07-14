import { Props } from '@/types/index.types';
import { AriaModalOverlayProps } from 'react-aria';

export type ModalContentProps = AriaModalOverlayProps & Props<'div'>;
