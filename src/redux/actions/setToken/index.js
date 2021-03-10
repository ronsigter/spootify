import { setTokenSuccess } from './actions'

const setToken = (token) => (dispatch) => {
  dispatch(setTokenSuccess(token))
}

export default setToken
