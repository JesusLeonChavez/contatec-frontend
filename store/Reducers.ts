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
    case ACTIONS.GET_CATEGORIES:
      return {
        ...state,
        categories: [...action.payload]
      }
    case ACTIONS.POSTS:
      return {
        ...state,
        posts: [...action.payload]
      }
    case ACTIONS.ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      }
    case ACTIONS.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => {
          return post.id !== action.payload
        })
      }
    default:
      return state
  }
}

export default reducers
