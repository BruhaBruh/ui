import type React from 'react';

export type ContextState<T> = [T, React.Dispatch<React.SetStateAction<T>>];
