import React from 'react'
import ReactDOM from 'react-dom'
import routes from 'config/routes'
import users from 'redux/modules/users'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(users)

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
document.getElementById('app'))
