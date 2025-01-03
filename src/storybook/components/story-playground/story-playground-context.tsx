import { EmptyObject, UnknownRecord } from '@bruhabruh/type-safe';
import React from 'react';

type BaseArgument<
  T extends string,
  DF = unknown,
  U extends UnknownRecord = EmptyObject,
> = {
  type: T;
  label?: string;
  description?: string;
  defaultValue?: DF;
} & U;

type TextArgument = BaseArgument<'text', string>;

type NumberArgument = BaseArgument<'number', number>;

type SwitchArgument = BaseArgument<'switch', boolean>;

type SelectArgument = BaseArgument<'select', string> & {
  options: string[];
};

type RadioArgument = BaseArgument<'radio', string> & {
  options: string[];
};

type CheckboxArgument = BaseArgument<'checkbox', string[]> & {
  options: string[];
};

export type Argument =
  | TextArgument
  | NumberArgument
  | SwitchArgument
  | SelectArgument
  | RadioArgument
  | CheckboxArgument;

export type Arguments = Record<string, Argument>;

export type StoryPlaygroundState<T extends Arguments = Arguments> = {
  arguments: T;
  values: UnknownRecord;
};

export const StoryPlaygroundContext = React.createContext<
  | [
      StoryPlaygroundState,
      React.Dispatch<React.SetStateAction<StoryPlaygroundState>>,
    ]
  | null
>(null);

export const useStoryPlayground = () => {
  const value = React.useContext(StoryPlaygroundContext);
  if (!value)
    throw new Error('Context must use with StoryPlayground component');
  return value;
};
