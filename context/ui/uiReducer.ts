import { UiState } from './';

type UiActionType = { type: 'Ui - setTheme'; payload: 'light' | 'dark' };

export const uiReducer = (state: UiState, action: UiActionType): UiState => {
  switch (action.type) {
    case 'Ui - setTheme':
      return {
        ...state,
        theme: action.payload,
      };

    default:
      return state;
  }
};
