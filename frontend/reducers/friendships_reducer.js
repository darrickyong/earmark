import { RECEIVE_FRIENDSHIPS, RECEIVE_FRIENDSHIP, REMOVE_FRIENDSHIP } from "../actions/friendship_actions";

const friendshipsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_FRIENDSHIPS:
      return action.friendships;
    case RECEIVE_FRIENDSHIP:
      return Object.assign({}, oldState, { [action.friendship.id]: action.friendship })
    case REMOVE_FRIENDSHIP:
      let newState = Object.assign({}, oldState);
      delete newState[action.friendshipId];
      return newState;
    default:
      return oldState;
  }
}

export default friendshipsReducer;