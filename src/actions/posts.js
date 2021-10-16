import * as api from '../api'
import {
  FETCH_POSTS,
  FETCH_POST,
  FETCH_BY_TAG,
  FETCH_BY_CATEGORY,
  UPDATE,
  CREATE_POST,
  DELETE,
  START_LOADING,
  END_LOADING,
} from '../constants/actionTypes'

export const getPosts = (name) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING })
    const { data } = await api.fetchPosts(name)

    dispatch({ type: FETCH_POSTS, payload: data })
    dispatch({ type: END_LOADING })
  } catch (error) {
    console.log(error)
  }
}

export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING })
    const { data } = await api.fetchPost(id)
    dispatch({ type: FETCH_POST, payload: { post: data } })
  } catch (error) {
    console.log(error)
  }
}

export const createPost = (post, history) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING })
    const { data } = await api.createPost(post)

    dispatch({ type: CREATE_POST, payload: data })

    history.push(`/remote-nft/postjob/${data._id}`)
  } catch (error) {
    console.log(error)
  }
}

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post)

    dispatch({ type: UPDATE, payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id)

    dispatch({ type: DELETE, payload: id })
  } catch (error) {
    console.log(error)
  }
}

export const getPostsByTag = (tag) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING })
    const {
      data: { data },
    } = await api.fetchPostsByTag(tag)

    dispatch({ type: FETCH_BY_TAG, payload: { data } })
    dispatch({ type: END_LOADING })
  } catch (error) {
    console.log(error)
  }
}

export const getPostsByCategory = (category) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING })
    const { data } = await api.fetchPostsByCategory(category)

    dispatch({ type: FETCH_BY_CATEGORY, payload: data })
    dispatch({ type: END_LOADING })
  } catch (error) {
    console.log(error)
  }
}
