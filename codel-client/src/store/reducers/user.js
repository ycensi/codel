import { LOGIN, LOGOUT } from "../actions/user-actions"

const initialState = {
  data: null,
  token: null,
  error: null,
  isFetching: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, data: action.data, token: action.token }

    case LOGOUT:
      return Object.assign({}, initialState)

    default:
      return state
  }
}
