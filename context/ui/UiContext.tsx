import { createContext } from 'react';

interface ContextProps {
  theme: string;
}

export const UIContext = createContext({} as ContextProps);
