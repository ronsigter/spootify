import { PLAYLISTS_ERROR, PLAYLISTS_LOADING, PLAYLISTS_SUCCESS } from '../types'

export const fetchPlaylistsPending = () => {
  return {
    type: PLAYLISTS_LOADING,
  }
}

export const fetchPlaylistsSuccess = (items) => {
  return {
    type: PLAYLISTS_SUCCESS,
    payload: items,
  }
}

export const fetchPlaylistsError = (error) => {
  return {
    type: PLAYLISTS_ERROR,
    error: error,
  }
}
