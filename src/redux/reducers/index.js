import { combineReducers } from 'redux'
import newReleasesReducer from './newReleasesReducer'
import playlistsReducer from './playlistsReducer'
import categoriesReducer from './categoriesReducer'
import authReducer from './authReducer'

export default combineReducers({
  newReleases: newReleasesReducer,
  playlists: playlistsReducer,
  categories: categoriesReducer,
  auth: authReducer,
})
