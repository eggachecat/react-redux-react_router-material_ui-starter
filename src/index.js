import React from 'react'
import thunkMiddleware from 'redux-thunk'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import postReducer from './redux/reducer'
import Root from './Root'
import { Provider } from 'react-redux'

const store = createStore(postReducer, applyMiddleware(thunkMiddleware))

render(<Provider store={store}><Root /></Provider>, document.getElementById('root'))