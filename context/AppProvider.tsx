import React from 'react'
import AppContext from './AppContext';
import { useReducer } from 'react';
import uiReducer, { UI_INITIAL_STATE } from './ui/uiReducer';

const AppProvider = ( { children }: { children: JSX.Element | JSX.Element[] } ) => {
  const [uiState, uiDispatch] = useReducer( uiReducer, UI_INITIAL_STATE )

  const value = {
    ui: {
      uiState,
      uiDispatch
    }
  }

  return (<AppContext.Provider value={ value }>
    { children }
  </AppContext.Provider>)
}

export default AppProvider
