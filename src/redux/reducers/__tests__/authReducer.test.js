import reducer from '../authReducer'
import * as types from '../../actions/types'

describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      loading: false,
      error: null,
    })
  })

  it('should handle AUTH_SUCCESS', () => {
    expect(
      reducer(undefined, {
        type: types.AUTH_SUCCESS,
        payload: 'THIS-IS-A-TOKEN',
      })
    ).toEqual({
      token: 'THIS-IS-A-TOKEN',
      loading: false,
      error: null,
    })
  })
})
