import { FC, ReactNode, useReducer } from 'react';
import { UIContext, uiReducer } from '.';

export interface UiState {
  theme: 'light' | 'dark';
}

const initialState: UiState = {
  theme: 'light',
};

interface Props {
  children: ReactNode;
}

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, initialState);
  return (
    <UIContext.Provider value={{ theme: 'light' }}>
      {children}
    </UIContext.Provider>
  );
};
