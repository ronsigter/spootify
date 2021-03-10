import config from '../../../config'
import {
  fetchNewReleasePending,
  fetchNewReleaseSuccess,
  fetchNewReleaseError,
} from './actions'

const fetchNewRelease = () => (dispatch) => {
  dispatch(fetchNewReleasePending())
  fetch(`${config.api.baseUrl}/browse/new-releases`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization:
        'Bearer ' +
        'BQCjQHFaDZCJEq_e-l2ahcenVoSujFnNbUp0Vt1f0XYvVYvslnNL4FFlJE3BRe5PsOJhyCmu_7071SyeDY5-wi7-395myiXQo6YbkpPwIZoXbqx_iiiq5ha7J39Fv__F_5qiJb82-7gCvA',
    },
  })
    .then((response) => response.json())
    .then((data) => dispatch(fetchNewReleaseSuccess(data?.albums?.items || [])))
    .catch((error) => dispatch(fetchNewReleaseError(error)))
}

export default fetchNewRelease
