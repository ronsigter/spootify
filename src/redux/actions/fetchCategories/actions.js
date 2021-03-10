import {
  CATEGORIES_ERROR,
  CATEGORIES_LOADING,
  CATEGORIES_SUCCESS,
} from '../types'

export const fetchCategoriesPending = () => {
  return {
    type: CATEGORIES_LOADING,
  }
}

export const fetchCategoriesSuccess = (items) => {
  return {
    type: CATEGORIES_SUCCESS,
    payload: items,
  }
}

export const fetchCategoriesError = (error) => {
  return {
    type: CATEGORIES_ERROR,
    error: error,
  }
}
