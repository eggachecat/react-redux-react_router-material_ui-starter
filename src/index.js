import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import postReducer from './redux/reducer'
import Root from './Root'

const store = createStore(postReducer)

render(<Root store={store} />, document.getElementById('root'))