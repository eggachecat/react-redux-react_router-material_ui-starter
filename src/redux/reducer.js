import { ADD_POST, REMOVE_POST, AUTH_USER } from "./actions";
import { combineReducers } from 'redux'

/**
 * {
 *    "auth": {
 *        "authenticated": true,
 *        "user": {
 *            "name": "",
 *            "id": "",
 *        }
 *    },
 *    "posts": [{
 *        "name": "",
          "title": "",
 *        "introduction": ""
 *    }]
 * }
 */

const defaultPosts = [{
  name: 'S',
  title: '2018-01-01',
  introduction: '这是一段介绍1',
  content: "这是一段详细的内容"
},
{
  name: 'B',
  title: '2018-01-01',
  introduction: '这是一段介绍2',
  content: "这是一段详细的内容"
},
{
  name: 'C',
  title: '2018-01-02',
  introduction: '这是一段介绍3',
  content: "这是一段详细的内容"
}]

const defaultAuth = {
  "authenticated": true,
  "user": {
    "id": 5,
    "name": "sunao"
  }
}

function parseTokenToUser(token) {
  return {
    "id": 5,
    "name": "sun"
  }
}

function authReducer(state = defaultAuth, action) {
  console.log(state, action)
  switch (action.type) {
    case AUTH_USER:
      return Object.assign({}, state, {
        authenticated: true,
        user: {
          "id": 5,
          "name": "sun"
        }
      })
    default:
      return state
  }
}

function postsReducer(state = defaultPosts, action) {
  console.log(state, action)
  return state
}

export default combineReducers({
  auth: authReducer,
  posts: postsReducer,
})
// import { combineReducers } from 'redux'
// import {
//   ADD_TODO,
//   TOGGLE_TODO,
//   SET_VISIBILITY_FILTER,
//   VisibilityFilters
// } from './actions'
// const { SHOW_ALL } = VisibilityFilters

// function visibilityFilter(state = SHOW_ALL, action) {
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return action.filter
//     default:
//       return state
//   }
// }

// function todos(state = [], action) {
//   switch (action.type) {
//     case ADD_TODO:
//       return [
//         ...state,
//         {
//           text: action.text,
//           completed: false
//         }
//       ]
//     case TOGGLE_TODO:
//       return state.map((todo, index) => {
//         if (index === action.index) {
//           return Object.assign({}, todo, {
//             completed: !todo.completed
//           })
//         }
//         return todo
//       })
//     default:
//       return state
//   }
// }

// const todoApp = combineReducers({
//   visibilityFilter,
//   todos
// })

// export default todoApp