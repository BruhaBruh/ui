type ModuleTypeNamespace =
  | 'components'
  | 'communication'
  | 'containment'
  | 'input'
  | 'selection'
  | 'utility';

type ActionModuleKeys =
  | 'button'
  | 'extended-fab'
  | 'fab'
  | 'icon-button'
  | 'segmented-button';

type CommunicationModuleKeys = 'badge' | 'tooltip';

type ContainmentModuleKeys = 'dialog' | 'divider' | 'modal' | 'popover';

type InputModuleKeys =
  | 'field'
  | 'number-field'
  | 'text-area-field'
  | 'text-field';

type SelectionModuleKeys = 'checkbox' | 'menu' | 'radio' | 'slider' | 'switch';

type UtilityModuleKeys = 'portal';

type ModuleTypeKey<T extends ModuleTypeNamespace> = T extends 'components'
  ? ActionModuleKeys
  : T extends 'communication'
    ? CommunicationModuleKeys
    : T extends 'containment'
      ? ContainmentModuleKeys
      : T extends 'input'
        ? InputModuleKeys
        : T extends 'selection'
          ? SelectionModuleKeys
          : T extends 'utility'
            ? UtilityModuleKeys
            : never;

type ModuleType<T extends ModuleTypeNamespace> = `${T}:${ModuleTypeKey<T>}`;

export type ModuleConfig<T extends ModuleTypeNamespace = ModuleTypeNamespace> =
  {
    name: string;
    dependencies?: string[];
    files: { name: string; path: string }[];
    type: ModuleType<T>;
  };
