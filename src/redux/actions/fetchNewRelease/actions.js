import {
  NEW_RELEASE_ERROR,
  NEW_RELEASE_LOADING,
  NEW_RELEASE_SUCCESS,
} from '../types'

export const fetchNewReleasePending = () => {
  return {
    type: NEW_RELEASE_LOADING,
  }
}

export const fetchNewReleaseSuccess = (items) => {
  return {
    type: NEW_RELEASE_SUCCESS,
    payload: items,
  }
}

export const fetchNewReleaseError = (error) => {
  return {
    type: NEW_RELEASE_ERROR,
    error: error,
  }
}
