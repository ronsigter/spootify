import * as actions from '../../fetchCategories/actions'
import * as types from '../../types'

describe('fetchCategories action creator', () => {
  it('should return type of CATEGORIES_LOADING', () => {
    const expectedAction = {
      type: types.CATEGORIES_LOADING,
    }
    expect(actions.fetchCategoriesPending()).toEqual(expectedAction)
  })

  it('should return type of CATEGORIES_ERROR with ERROR MESSAGE as error', () => {
    const errorMessage = 'ERROR OCCURED'
    const expectedAction = {
      type: types.CATEGORIES_ERROR,
      error: errorMessage,
    }
    expect(actions.fetchCategoriesError(errorMessage)).toEqual(expectedAction)
  })

  it('should return type of CATEGORIES_SUCCESS with ITEMS as payload', () => {
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
      type: types.CATEGORIES_SUCCESS,
      payload: items,
    }
    expect(actions.fetchCategoriesSuccess(items)).toEqual(expectedAction)
  })
})
