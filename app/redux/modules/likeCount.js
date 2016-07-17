import { ADD_LIKE, REMOVE_LIKE } from './usersLikes'
const FETCHING_COUNT = 'FETCHING_COUNT'
const FETCHING_COUNT_ERROR = 'FETCHING_COUNT_ERROR'
const FETCHING_COUNT_SUCCESS = 'FETCHING_COUNT_SUCCESS'

function fetchingCount () {
  return {
    type: FETCHING_COUNT,
  }
}

function fetchingCountError (error) {
  console.warn(error)
  return {
    type: FETCHING_COUNT_ERROR,
    error: 'Error fetching duck\'s like count',
  }
}

function fetchingCountSuccess (duckId, count) {
  return {
    type: FETCHING_COUNT_SUCCESS,
    duckId,
    count,
  }
}

function count (state = 0, action) {
  switch (action.type) {
    case ADD_LIKE :
      return state + 1
    case REMOVE_LIKE :
      return state - 1
    default :
      return state
  }
}

const initialState = {
  isFetching: false,
  error: '',
}

export default function likeCount (state = initialState, action) {
  switch (action.type) {
    case FETCHING_COUNT :
      return {
        ...state,
        isFetching: true,
      }
    case FETCHING_COUNT_ERROR :
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case FETCHING_COUNT_SUCCESS :
      return {
        ...state,
        ...initialState,
        [action.duckId]: action.count,
      }
    case ADD_LIKE :
    case REMOVE_LIKE :
      return typeof state[action.duckId] === 'undefined'
        ? state
        : {
          ...state,
          [action.duckId]: count(state[action.duckId], action),
        }
    default :
      return state
  }
}