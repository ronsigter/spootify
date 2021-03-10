import config from '../../../config'
import {
  fetchCategoriesPending,
  fetchCategoriesSuccess,
  fetchCategoriesError,
} from './actions'

const fetchCategories = (token) => (dispatch) => {
  dispatch(fetchCategoriesPending())
  fetch(`${config.api.baseUrl}/browse/categories`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  })
    .then((response) => response.json())
    .then((data) =>
      dispatch(fetchCategoriesSuccess(data?.categories?.items || []))
    )
    .catch((error) => dispatch(fetchCategoriesError(error)))
}

export default fetchCategories
