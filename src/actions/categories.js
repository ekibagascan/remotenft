import * as api from '../api'
import {
  FETCH_CATEGORIES,
  FETCH_CATEGORY,
  START_LOADING,
  END_LOADING,
} from '../constants/actionTypes'

export const getCategories = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING })
    const { data } = await api.fetchCategories()

    dispatch({ type: FETCH_CATEGORIES, payload: data })
    dispatch({ type: END_LOADING })
  } catch (error) {
    console.log(error)
  }
}

export const getCategory = (name) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING })
    const { data } = await api.fetchCategory(name)

    dispatch({ type: FETCH_CATEGORY, payload: { category: data } })
    dispatch({ type: END_LOADING })
  } catch (error) {
    console.log(error)
  }
}
