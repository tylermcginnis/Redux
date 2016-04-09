import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { logoutAndUnauth } from 'redux/modules/users'
import { Logout } from 'components'

const LogoutContainer = React.createClass({
  propTypes: {
    dispatch: PropTypes.func.isRequired,
  },
  componentDidMount () {
    this.props.dispatch(logoutAndUnauth())
  },
  render () {
    return <Logout />
  },
})

export default connect()(LogoutContainer)
