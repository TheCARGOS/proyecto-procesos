export interface IUIAction {
  type: string,
  payload: {
    isOpenModal: boolean
  }
}

export interface IUIState {
  isOpenModal: boolean
}

export const UI_INITIAL_STATE = {
  isOpenModal: false
}

const uiReducer = ( state: IUIState, action: IUIAction ): IUIState => {
  switch (action.type) {
    case "OPEN_MODAL":
      return { ...state, isOpenModal: true }
    case "CLOSE_MODAL":
      return { ...state, isOpenModal: false }
    case "SET_IS_OPEN_MODAL":
      const { isOpenModal } = action.payload
      return { ...state, isOpenModal }
    default:
      return { ...state, isOpenModal: false }
  }
}

export default uiReducer
