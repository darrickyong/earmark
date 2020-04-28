import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS, REMOVE_SESSION_ERRORS } from "../actions/session_actions";

const sessionErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  // debugger
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      // debugger;
      return [];
    case REMOVE_SESSION_ERRORS:
      return [];
    default:
      return oldState;
  }
}

export default sessionErrorsReducer;