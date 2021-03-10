import { AUTH_ERROR, AUTH_LOADING, AUTH_SUCCESS } from '../actions/types'

const initialState = {
  token: null,
  loading: false,
  error: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case AUTH_LOADING:
      return {
        ...state,
        loading: true,
      }
    case AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload,
      }
    case AUTH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      }

    default:
      return state
  }
}
