import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Duck } from 'components'
const { func, object, bool, number } = PropTypes

const DuckContainer = React.createClass({
  propTypes: {
    duck: object.isRequired,
    handleClick: func,
    hideLikeCount: bool.isRequired,
    hideReplyBtn: bool.isRequired,
    isLiked: bool.isRequired,
    numberOfLikes: number,
    addAndHandleLike: func.isRequired,
    handleDeleteLike: func.isRequired,
  },
  contextTypes: {
    router: PropTypes.object.isRequired,
  },
  getDefaultProps () {
    return {
      hideReplyBtn: false,
      hideLikeCount: true,
    }
  },
  goToProfile (e) {
    e.stopPropagation()
    this.context.router.push('/' + this.props.duck.uid)
  },
  handleClick (e) {
    e.preventDefault()
    this.context.router.push('/duckDetail/' + this.props.duck.duckId)
  },
  render () {
    return (
      <Duck
        goToProfile={this.goToProfile}
        onClick={this.props.hideReplyBtn === true ? null : this.handleClick}
        {...this.props} />
    )
  },
})

function mapStateToProps ({ducks, likeCount, usersLikes}, props) {
  return {
    duck: ducks[props.duckId],
    hideLikeCount: props.hideLikeCount,
    hideReplyBtn: props.hideReplyBtn,
    isLiked: usersLikes[props.duckId] === true,
    numberOfLikes: likeCount[props.duckId],
  }
}

export default connect(
  mapStateToProps
)(DuckContainer)