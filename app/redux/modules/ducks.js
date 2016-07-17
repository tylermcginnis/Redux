import { saveDuck, fetchDuck } from 'helpers/api'
import { closeModal } from './modal'
import { addSingleUsersDuck } from './usersDucks'
import { Map, fromJS } from 'immutable'

const FETCHING_DUCK = 'FETCHING_DUCK'
const FETCHING_DUCK_ERROR = 'FETCHING_DUCK_ERROR'
const FETCHING_DUCK_SUCCESS = 'FETCHING_DUCK_SUCCESS'
const ADD_DUCK = 'ADD_DUCK'
const ADD_MULTIPLE_DUCKS = 'ADD_MULTIPLE_DUCKS'
const REMOVE_FETCHING = 'REMOVE_FETCHING'

function fetchingDuck () {
  return {
    type: FETCHING_DUCK,
  }
}

function fetchingDuckError (error) {
  return {
    type: FETCHING_DUCK_ERROR,
    error: 'Error fetching Duck',
  }
}

function fetchingDuckSuccess (duck) {
  return {
    type: FETCHING_DUCK_SUCCESS,
    duck,
  }
}

export function removeFetching () {
  return {
    type: REMOVE_FETCHING,
  }
}

function addDuck (duck) {
  return {
    type: ADD_DUCK,
    duck,
  }
}

export function duckFanout (duck) {
  return function (dispatch, getState) {
    const uid = getState().users.authedId
    saveDuck(duck)
      .then((duckWithId) => {
        dispatch(addDuck(duckWithId))
        dispatch(closeModal())
        dispatch(addSingleUsersDuck(uid, duckWithId.duckId))
      })
      .catch((err) => {
        console.warn('Error in duckFanout', err)
      })
  }
}

export function addMultipleDucks (ducks) {
  return {
    type: ADD_MULTIPLE_DUCKS,
    ducks,
  }
}

export function fetchAndHandleDuck (duckId) {
  return function (dispatch) {
    dispatch(fetchingDuck())
    fetchDuck(duckId)
      .then((duck) => dispatch(fetchingDuckSuccess(duck)))
      .catch((error) => dispatch(fetchingDuckError(error)))
  }
}

const initialState = Map({
  isFetching: true,
  error: ''
})

export default function ducks (state = initialState, action) {
  switch (action.type) {
    case FETCHING_DUCK :
      return state.merge({
        isFetching: true,
      })
    case ADD_DUCK :
    case FETCHING_DUCK_SUCCESS :
      return state.merge({
        error: '',
        isFetching: false,
        [action.duck.duckId]: action.duck,
      })
    case FETCHING_DUCK_ERROR :
      return state.merge({
        isFetching: false,
        error: action.error,
      })
    case REMOVE_FETCHING :
      return state.merge({
        isFetching: false,
        error: '',
      })
    case ADD_MULTIPLE_DUCKS :
      return state.merge(action.ducks)
    default :
      return state
  }
}