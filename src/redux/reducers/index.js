import { combineReducers } from 'redux'
import newReleasesReducer from './newReleasesReducer'
import playlistsReducer from './playlistsReducer'
import categoriesReducer from './categoriesReducer'

export default combineReducers({
  newReleases: newReleasesReducer,
  playlists: playlistsReducer,
  categories: categoriesReducer,
})
