import React, { useReducer } from 'react'
import UIContext from './uiContext'
import uiReducer, { UI_INITIAL_STATE } from './uiReducer'

const uiProvider = ( children: JSX.Element | JSX.Element[] ) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [ uiState ] = useReducer( uiReducer, UI_INITIAL_STATE )
  
  return (
    <UIContext.Provider value={{
      uiState
    }}>
      { children }
    </UIContext.Provider>
  )
}

export default uiProvider
