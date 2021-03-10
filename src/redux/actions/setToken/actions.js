import { AUTH_SUCCESS } from '../types'

export const setTokenSuccess = (token) => {
  return {
    type: AUTH_SUCCESS,
    payload: token,
  }
}
