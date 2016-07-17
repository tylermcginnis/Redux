import React, { PropTypes } from 'react'
import { formatTimestamp } from 'helpers/utils'
import Reply from 'react-icons/lib/fa/mail-reply'
import Star from 'react-icons/lib/fa/star'
import {
  duckContainer, contentContainer, avatar, actionContainer,
  header, text, likeReplyContainer, icon, likedIcon, author,
} from './styles.css'

Duck.propTypes = {
  duck: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    duckId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    uid: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func,
  isLiked: PropTypes.bool.isRequired,
  addAndHandleLike: PropTypes.func.isRequired,
  handleDeleteLike: PropTypes.func.isRequired,
  numberOfLikes: PropTypes.number,
  hideReplyBtn: PropTypes.bool.isRequired,
  hideLikeCount: PropTypes.bool.isRequired,
  goToProfile: PropTypes.func.isRequired,
}

export default function Duck (props) {
  const starIcon = props.isLiked === true ? likedIcon : icon
  const starFn = props.isLiked === true ? props.handleDeleteLike : props.addAndHandleLike
  return (
    <div
      className={duckContainer}
      style={{cursor: props.hideReplyBtn === true ? 'default' : 'pointer'}}
      onClick={props.onClick}>
        <img src={props.duck.avatar} className={avatar}/>
        <div className={contentContainer}>
          <div className={header}>
            <div onClick={props.goToProfile} className={author}>{props.duck.name}</div>
            <div>{formatTimestamp(props.duck.timestamp)}</div>
          </div>
          <div className={text}>{props.duck.text}</div>
          <div className={likeReplyContainer}>
            {props.hideReplyBtn === true
              ? null
              : <Reply className={icon} />}
            <div className={actionContainer}>
              <Star className={starIcon} onClick={(e) => starFn(props.duck.duckId, e)} />
              {props.hideLikeCount === true ? null : <div>{props.numberOfLikes}</div>}
            </div>
          </div>
        </div>
    </div>
  )
}