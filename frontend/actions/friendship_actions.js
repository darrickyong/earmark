import * as FriendshipApiUtil from "../util/friendship_api_util";

export const RECEIVE_FRIENDSHIPS = "RECEIVE_FRIENDSHIPS";
export const RECEIVE_FRIENDSHIP = "RECEIVE_FRIENDSHIP";
export const REMOVE_FRIENDSHIP = "REMOVE_FRIENDSHIP";
export const RECEIVE_FRIEND_ERRORS = "RECEIVE_FRIEND_ERRORS";

const receiveFriendships = friendships => ({
  type: RECEIVE_FRIENDSHIPS,
  friendships
})

const receiveFriendship = friendship => ({
  type: RECEIVE_FRIENDSHIP,
  friendship
})

const removeFriendship = friendshipId => ({
  type: REMOVE_FRIENDSHIP,
  friendshipId
})

export const receiveFriendErrors = errors => ({
  type: RECEIVE_FRIEND_ERRORS,
  errors
})

export const fetchFriendships = () => dispatch => FriendshipApiUtil.fetchFriendships()
  .then( friendships => dispatch(receiveFriendships(friendships)));

export const fetchFriendship = friendshipId => dispatch => FriendshipApiUtil.fetchFriendship(friendshipId)
  .then( friendship => dispatch(receiveFriendship(friendship)));

export const createFriendship = friendship => dispatch => FriendshipApiUtil.createFriendship(friendship)
  .then( friendship => dispatch(receiveFriendship(friendship)),
  errors => dispatch(receiveFriendErrors(errors.responseJSON)));

export const deleteFriendship = friendshipId => dispatch => FriendshipApiUtil.deleteFriendship(friendshipId)
  .then( () => dispatch(removeFriendship(friendshipId)));