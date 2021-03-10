import reducer from '../categoriesReducer'
import * as types from '../../actions/types'

describe('categories reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      items: [],
      loading: false,
      error: null,
    })
  })

  it('should handle CATEGORIES_LOADING', () => {
    expect(
      reducer(undefined, {
        type: types.CATEGORIES_LOADING,
      })
    ).toEqual({
      items: [],
      loading: true,
      error: null,
    })
  })

  it('should handle CATEGORIES_SUCCESS', () => {
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
        type: types.CATEGORIES_SUCCESS,
        payload: items,
      })
    ).toEqual({
      items: items,
      loading: false,
      error: null,
    })
  })

  it('should handle CATEGORIES_ERROR', () => {
    expect(
      reducer(undefined, {
        type: types.CATEGORIES_ERROR,
        error: 'AN ERROR OCCURED',
      })
    ).toEqual({
      items: [],
      loading: false,
      error: 'AN ERROR OCCURED',
    })
  })
})
