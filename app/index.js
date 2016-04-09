import React from 'react'
import ReactDOM from 'react-dom'
import routes from 'config/routes'
import users from 'redux/modules/users'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(users, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
document.getElementById('app'))
