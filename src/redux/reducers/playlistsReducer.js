import {
  PLAYLISTS_ERROR,
  PLAYLISTS_LOADING,
  PLAYLISTS_SUCCESS,
} from '../actions/types'

const initialState = {
  items: [],
  loading: false,
  error: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case PLAYLISTS_LOADING:
      return {
        ...state,
        loading: true,
      }
    case PLAYLISTS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
      }
    case PLAYLISTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      }

    default:
      return state
  }
}
