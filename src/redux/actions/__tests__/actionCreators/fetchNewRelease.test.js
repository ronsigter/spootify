import * as actions from '../../fetchNewRelease/actions'
import * as types from '../../types'

describe('actions', () => {
  it('should return type of NEW_RELEASE_LOADING', () => {
    const expectedAction = {
      type: types.NEW_RELEASE_LOADING,
    }
    expect(actions.fetchNewReleasePending()).toEqual(expectedAction)
  })

  it('should return type of NEW_RELEASE_ERROR with ERROR MESSAGE as error', () => {
    const errorMessage = 'ERROR OCCURED'
    const expectedAction = {
      type: types.NEW_RELEASE_ERROR,
      error: errorMessage,
    }
    expect(actions.fetchNewReleaseError(errorMessage)).toEqual(expectedAction)
  })

  it('should return type of NEW_RELEASE_SUCCESS with ITEMS as payload', () => {
    const items = [
      {
        name: 'test-item-1',
        images: [
          {
            url: 'http://test-url-1.com',
          },
        ],
      },
      {
        name: 'test-item-2',
        images: [
          {
            url: 'http://test-url-2.com',
          },
        ],
      },
    ]
    const expectedAction = {
      type: types.NEW_RELEASE_SUCCESS,
      payload: items,
    }
    expect(actions.fetchNewReleaseSuccess(items)).toEqual(expectedAction)
  })
})
