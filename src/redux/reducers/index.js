import { combineReducers } from 'redux'
import newReleasesReducer from './newReleasesReducer'

export default combineReducers({
  newReleases: newReleasesReducer,
})
