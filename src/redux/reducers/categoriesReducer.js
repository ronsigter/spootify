import {
  CATEGORIES_ERROR,
  CATEGORIES_LOADING,
  CATEGORIES_SUCCESS,
} from '../actions/types'

const initialState = {
  items: [],
  loading: false,
  error: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case CATEGORIES_LOADING:
      return {
        ...state,
        loading: true,
      }
    case CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
      }
    case CATEGORIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      }

    default:
      return state
  }
}
