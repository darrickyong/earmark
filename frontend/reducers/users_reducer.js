import { RECEIVE_USERS, RECEIVE_CURRENT_USER } from "../actions/session_actions";

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USERS:
      return action.users;
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, oldState, { [action.currentUser.id]: action.currentUser })
    default:
      return oldState;
  }
}

export default usersReducer;