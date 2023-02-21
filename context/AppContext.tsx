import { createContext } from 'react';
import { IUIState } from './ui/uiReducer';

export interface IAppContext {
  ui: {
    uiState: IUIState,
    uiDispatch: Function
  }
}

const AppContext = createContext({} as IAppContext)
export default AppContext