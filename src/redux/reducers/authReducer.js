import { AUTH_SUCCESS } from '../actions/types'

const initialState = {
  token: null,
  loading: false,
  error: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload,
      }
    default:
      return state
  }
}
