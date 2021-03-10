import {
  NEW_RELEASE_ERROR,
  NEW_RELEASE_LOADING,
  NEW_RELEASE_SUCCESS,
} from '../actions/types'

const initialState = {
  items: [],
  loading: false,
  error: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case NEW_RELEASE_LOADING:
      return {
        ...state,
        loading: true,
      }
    case NEW_RELEASE_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
      }
    case NEW_RELEASE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      }

    default:
      return state
  }
}
