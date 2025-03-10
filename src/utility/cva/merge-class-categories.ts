import type { ClassValue } from 'class-variance-authority/types';
import type { ClassCategories } from './cva.types';

export const mergeClassCategories = (
  classCategories: ClassCategories,
): ClassValue => Object.values(classCategories);
