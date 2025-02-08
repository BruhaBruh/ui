import { ClassValue } from 'class-variance-authority/types';
import { ClassCategories } from './cva.types';

export const mergeClassCategories = (
  classCategories: ClassCategories,
): ClassValue => Object.values(classCategories);
