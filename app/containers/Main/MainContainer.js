import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Navigation } from 'components'
import { container, innerContainer } from './styles.css'

const MainContainer = React.createClass({
  propTypes: {
    isAuthed: PropTypes.bool.isRequired,
  },
  render () {
    return (
      <div className={container}>
        <Navigation isAuthed={this.props.isAuthed} />
        <div className={innerContainer}>
          {this.props.children}
        </div>
      </div>
    )
  },
})

export default connect(
  (state) => ({isAuthed: state.isAuthed})
)(MainContainer)
