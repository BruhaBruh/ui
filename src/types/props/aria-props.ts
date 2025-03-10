import type { EmptyObject, Schema } from '@bruhabruh/type-safe';
import type { AsChildProp } from './as-prop';

export type AriaProps<
  T extends React.ElementType,
  Props = EmptyObject,
  OmitKeys extends keyof Props | '' = '',
  OmitProps extends Schema<Props, unknown> | EmptyObject = EmptyObject,
> = Omit<Props, keyof OmitProps | OmitKeys> &
  Pick<React.ComponentPropsWithRef<T>, 'ref' | 'className' | 'children'>;

export type AriaPropsWithAsChild<
  T extends React.ElementType,
  Props = EmptyObject,
  OmitKeys extends keyof Props | '' = '',
  OmitProps extends Schema<Props, unknown> | EmptyObject = EmptyObject,
> = AriaProps<T, Props, OmitKeys, OmitProps> & AsChildProp;
