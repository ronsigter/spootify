import config from '../../../config'
import {
  fetchNewReleasePending,
  fetchNewReleaseSuccess,
  fetchNewReleaseError,
} from './actions'

const fetchNewRelease = (token) => (dispatch) => {
  dispatch(fetchNewReleasePending())
  fetch(`${config.api.baseUrl}/browse/new-releases`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  })
    .then((response) => response.json())
    .then((data) => dispatch(fetchNewReleaseSuccess(data?.albums?.items || [])))
    .catch((error) => dispatch(fetchNewReleaseError(error)))
}

export default fetchNewRelease
