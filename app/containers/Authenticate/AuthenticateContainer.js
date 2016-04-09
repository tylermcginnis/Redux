import React from 'react'
import { Authenticate } from 'components'
import auth from 'helpers/auth'

const AuthenticateContainer = React.createClass({
  handleAuth () {
    auth().then((user) => {
      console.log(user)
    })
  },
  render () {
    return (
      <Authenticate
        onAuth={this.handleAuth}
        isFetching={false}
        error={''} />
    )
  },
})

export default AuthenticateContainer