// Users
{
  type: AUTH_USER,
  uid,
}

{
  type: UNAUTH_USER,
}

{
  type: FETCHING_USER,
}

{
  type: FETCHING_USER_FAILURE,
  error: 'Error fetching user.',
}

{
  type: FETCHING_USER_SUCCESS,
  uid,
  user,
  timestamp,
}


// Ducks
{
  type: FETCHING_DUCK,
}

{
  type: FETCHING_DUCK_ERROR,
  error: 'Error fetching Duck',
}

{
  type: FETCHING_DUCK_SUCCESS,
  duck,
}

{
  type: REMOVE_FETCHING,
}

{
  type: ADD_DUCK,
  duck,
}

{
  type: ADD_MULTIPLE_DUCKS,
  ducks,
}


// Feed
{
  type: SETTING_FEED_LISTENER,
}

{
  type: SETTING_FEED_LISTENER_ERROR,
  error: 'Error fetching feeds.',
}

{
  type: SETTING_FEED_LISTENER_SUCCESS,
  duckIds,
}

{
  type: ADD_NEW_DUCK_ID_TO_FEED,
  duckId,
}

{
  type: RESET_NEW_DUCKS_AVAILABLE,
}


//Listeners
{
  type: ADD_LISTENER,
  listenerId,
}


//Modal
{
  type: OPEN_MODAL,
}

  {
  type: CLOSE_MODAL,
}

{
  type: UPDATE_DUCK_TEXT,
  newDuckText,
}


//Replies
{
  type: ADD_REPLY,
  duckId,
  reply,
}

{
  type: ADD_REPLY_ERROR,
  error: 'Error adding reply',
}

{
  type: REMOVE_REPLY,
  replyId,
}

{
  type: FETCHING_REPLIES,
}

{
  type: FETCHING_REPLIES_ERROR,
  error: 'Error fetching replies',
}

{
  type: FETCHING_REPLIES_SUCCESS,
  replies,
  duckId,
  lastUpdated: Date.now(),
}


// likeCount
{
  type: FETCHING_COUNT,
}

{
  type: FETCHING_COUNT_ERROR,
  error: 'Error fetching duck\'s like count',
}

{
  type: FETCHING_COUNT_SUCCESS,
  duckId,
  count,
}


//usersDucks
{
  type: FETCHING_USERS_DUCKS,
  uid,
}

{
  type: FETCHING_USERS_DUCKS_ERROR,
  error: 'Error fetching Users Duck Ids',
}

{
  type: FETCHING_USERS_DUCKS_SUCCESS,
  uid,
  duckIds,
  lastUpdated,
}

{
  type: ADD_SINGLE_USERS_DUCK,
  uid,
  duckId,
}


// usersLikes
{
  type: ADD_LIKE,
  duckId,
}

{
  type: REMOVE_LIKE,
  duckId,
}

{
  type: FETCHING_LIKES,
}

{
  type: FETCHING_LIKES_ERROR,
  error: 'Error fetching likes',
}

{
  type: FETCHING_LIKES_SUCCESS,
  likes,
}
