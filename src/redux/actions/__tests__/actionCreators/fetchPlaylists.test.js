import * as actions from '../../fetchPlaylists/actions'
import * as types from '../../types'

describe('fetchPlaylists action creator', () => {
  it('should return type of PLAYLISTS_LOADING', () => {
    const expectedAction = {
      type: types.PLAYLISTS_LOADING,
    }
    expect(actions.fetchPlaylistsPending()).toEqual(expectedAction)
  })

  it('should return type of PLAYLISTS_ERROR with ERROR MESSAGE as error', () => {
    const errorMessage = 'ERROR OCCURED'
    const expectedAction = {
      type: types.PLAYLISTS_ERROR,
      error: errorMessage,
    }
    expect(actions.fetchPlaylistsError(errorMessage)).toEqual(expectedAction)
  })

  it('should return type of PLAYLISTS_SUCCESS with ITEMS as payload', () => {
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
      type: types.PLAYLISTS_SUCCESS,
      payload: items,
    }
    expect(actions.fetchPlaylistsSuccess(items)).toEqual(expectedAction)
  })
})
