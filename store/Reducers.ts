import { ACTIONS } from "./Actions"

const reducers = (state, action) => {
  switch (action.type) {
    case ACTIONS.AUTH:
      return {
        ...state,
        auth: action.payload
      }
    case ACTIONS.AUTH_READY:
      return {
        ...state,
        authReady: action.payload
      }
    case ACTIONS.AUTH_TYPE:
      return {
        ...state,
        authType: action.payload
      }
    case ACTIONS.USER:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state
  }
}

export default reducers
