import { cva as baseCva } from 'class-variance-authority';
import type {
  BaseConfig,
  ClassCategories,
  Config,
  ResultFn,
} from './cva.types';
import { mergeClassCategories } from './merge-class-categories';

export const cva = <T>(
  classCategories: ClassCategories,
  config?: Config<T>,
): ResultFn<T> => {
  const base = mergeClassCategories(classCategories);
  if (!config) return baseCva(base) as ResultFn<T>;
  const baseConfig: BaseConfig = {};

  if (config.variants) {
    if (!baseConfig.variants) baseConfig.variants = {};
    Object.entries(config.variants).forEach(([variantName, variants]) => {
      if (!baseConfig.variants) return;
      if (!baseConfig.variants[variantName])
        baseConfig.variants[variantName] = {};
      Object.entries(variants).forEach(([variant, categories]) => {
        if (!baseConfig.variants) return;
        if (!baseConfig.variants[variantName]) return;
        baseConfig.variants[variantName][variant] =
          mergeClassCategories(categories);
      });
    });
  }
  if (config.defaultVariants) {
    if (!baseConfig.defaultVariants) baseConfig.defaultVariants = {};
    Object.entries(config.defaultVariants).forEach(([variantName, value]) => {
      if (!baseConfig.defaultVariants) return;
      baseConfig.defaultVariants[variantName] = value;
    });
  }
  if (config.compoundVariants) {
    if (!baseConfig.compoundVariants) baseConfig.compoundVariants = [];
    for (let i = 0; i < config.compoundVariants.length; i++) {
      const compoundVariant = config.compoundVariants[i];
      baseConfig.compoundVariants.push({
        ...compoundVariant,
        className: mergeClassCategories(compoundVariant.className),
      } as NonNullable<BaseConfig['compoundVariants']>[number]);
    }
  }

  return baseCva(base, baseConfig) as ResultFn<T>;
};
