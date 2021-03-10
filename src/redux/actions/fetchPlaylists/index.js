import config from '../../../config'
import {
  fetchPlaylistsPending,
  fetchPlaylistsSuccess,
  fetchPlaylistsError,
} from './actions'

const fetchPlaylists = (token) => (dispatch) => {
  dispatch(fetchPlaylistsPending())
  fetch(`${config.api.baseUrl}/browse/featured-playlists`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  })
    .then((response) => response.json())
    .then((data) =>
      dispatch(fetchPlaylistsSuccess(data?.playlists?.items || []))
    )
    .catch((error) => dispatch(fetchPlaylistsError(error)))
}

export default fetchPlaylists
