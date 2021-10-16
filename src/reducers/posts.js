import {
  FETCH_POSTS,
  FETCH_POST,
  CREATE_POST,
  DELETE,
  UPDATE,
  FETCH_BY_CATEGORY,
  FETCH_BY_TAG,
} from '../constants/actionTypes'

const initialState = {
  isLoading: true,
  posts: [],
}

const posts = (state = initialState, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true }
    case 'END_LOADING':
      return { ...state, isLoading: false }
    case FETCH_POSTS:
      return { ...state, posts: action.payload.data }
    case FETCH_POST:
      return { ...state, post: action.payload.post }
    case FETCH_BY_TAG:
      return { ...state, posts: action.payload.data }
    case FETCH_BY_CATEGORY:
      return { ...state, posts: action.payload.data }
    case CREATE_POST:
      return { ...state, posts: [...state.posts, action.payload] }
    case UPDATE:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      }
    case DELETE:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      }
    default:
      return state
  }
}

export default posts
