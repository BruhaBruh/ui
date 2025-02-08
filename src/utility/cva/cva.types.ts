import { cva } from 'class-variance-authority';
import {
  ClassProp as BaseClassProp,
  ClassValue,
  StringToBoolean,
} from 'class-variance-authority/types';

export type ClassCategories = {
  name?: ClassValue;
  layout?: ClassValue;
  box?: ClassValue;
  typography?: ClassValue;
  background?: ClassValue;
  borders?: ClassValue;
  effects?: ClassValue;
  transitions?: ClassValue;
  states?: ClassValue;
  ripple?: ClassValue;
  overflow?: ClassValue;
  before?: ClassValue;
  after?: ClassValue;
  flex?: ClassValue;
  tables?: ClassValue;
  spacing?: ClassValue;
  transforms?: ClassValue;
  filters?: ClassValue;
  accessibility?: ClassValue;
  other?: ClassValue;
};

type ClassProp = {
  className: ClassCategories;
};

export type ConfigSchema = Record<string, Record<string, ClassCategories>>;

export type BaseConfigSchema = Record<string, Record<string, ClassValue>>;

type ConfigVariants<T extends ConfigSchema> = {
  [Variant in keyof T]?: StringToBoolean<keyof T[Variant]> | null | undefined;
};

type ConfigVariantsMulti<T extends ConfigSchema> = {
  [Variant in keyof T]?:
    | StringToBoolean<keyof T[Variant]>
    | StringToBoolean<keyof T[Variant]>[]
    | undefined;
};

type ConfigCompoundVariants<T extends ConfigSchema> = ((
  | ConfigVariants<T>
  | ConfigVariantsMulti<T>
) &
  ClassProp)[];

export type Config<T> = T extends ConfigSchema
  ? {
      variants?: T;
      defaultVariants?: ConfigVariants<T>;
      compoundVariants?: ConfigCompoundVariants<T>;
    }
  : never;

export type BaseConfig = NonNullable<
  Parameters<typeof cva<BaseConfigSchema>>[1]
>;

type Props<T> = T extends ConfigSchema
  ? ConfigVariants<T> & BaseClassProp
  : BaseClassProp;

export type ResultFn<T> = (props?: Props<T>) => string;
