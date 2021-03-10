import reducer from '../playlistsReducer'
import * as types from '../../actions/types'

describe('playlists reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      items: [],
      loading: false,
      error: null,
    })
  })

  it('should handle PLAYLISTS_LOADING', () => {
    expect(
      reducer(undefined, {
        type: types.PLAYLISTS_LOADING,
      })
    ).toEqual({
      items: [],
      loading: true,
      error: null,
    })
  })

  it('should handle PLAYLISTS_SUCCESS', () => {
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

    expect(
      reducer(undefined, {
        type: types.PLAYLISTS_SUCCESS,
        payload: items,
      })
    ).toEqual({
      items: items,
      loading: false,
      error: null,
    })
  })

  it('should handle PLAYLISTS_ERROR', () => {
    expect(
      reducer(undefined, {
        type: types.PLAYLISTS_ERROR,
        error: 'AN ERROR OCCURED',
      })
    ).toEqual({
      items: [],
      loading: false,
      error: 'AN ERROR OCCURED',
    })
  })
})
