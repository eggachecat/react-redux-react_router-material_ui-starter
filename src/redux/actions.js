import { axios } from "axios";

export const REMOVE_POST = 'REMOVE_POST'
export const ADD_POST = 'ADD_POST'

export const AUTH_USER = 'AUTH_USER'
export const UNAUTH_USER = 'UNAUTH_USER'
export const AUTH_ERROR = 'AUTH_ERROR'
export const FETCH_MESSAGE = 'FETCH_MESSAGE'

export const ROOT_URL = "http://127.0.0.1"
export const API_SIGNIN = `${ROOT_URL}/signin`

export function removePost(index) {
  console.log("action removePost")
  return { type: REMOVE_POST, index }
}

export function addPost(index) {
  console.log("action addPost")
  return { type: ADD_POST, index }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function signInTimeout({ email, password }) {
  console.log("action signInTimeout", email, password)
  return function (dispatch) {
    setTimeout(function(){
      localStorage.setItem('token', 'fake token')
      dispatch({ type: AUTH_USER })
    })
  }
}


export function signIn({ email, password }) {
  console.log("action signIn")

  return function (dispatch) {

    // submit email and password to server
    const request = axios.post(API_SIGNIN, { email, password })
    request
      .then(response => {
        // -Save the JWT token
        localStorage.setItem('token', response.data.token)

        // -if request is good, we need to update state to indicate user is authenticated
        dispatch({ type: AUTH_USER })
      })

      // If request is bad...
      // -Show an error to the user
      .catch(() => {
        dispatch(authError('bad login info'))
      })

  }
}


// /*
//  * action types
//  */

// export const ADD_TODO = 'ADD_TODO'
// export const TOGGLE_TODO = 'TOGGLE_TODO'
// export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

// /*
//  * other constants
//  */

// export const VisibilityFilters = {
//   SHOW_ALL: 'SHOW_ALL',
//   SHOW_COMPLETED: 'SHOW_COMPLETED',
//   SHOW_ACTIVE: 'SHOW_ACTIVE'
// }

// /*
//  * action creators
//  */

// export function addTodo(text) {
//   return { type: ADD_TODO, text }
// }

// export function toggleTodo(index) {
//   return { type: TOGGLE_TODO, index }
// }

// export function setVisibilityFilter(filter) {
//   return { type: SET_VISIBILITY_FILTER, filter }
// }