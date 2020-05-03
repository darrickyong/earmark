import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS, REMOVE_SESSION_ERRORS } from "../actions/session_actions";
import { RECEIVE_EXPENSE_ERRORS } from "../actions/expense_actions";
import { RECEIVE_FRIEND_ERRORS } from "../actions/friendship_actions";
import { RECEIVE_PAYMENT_ERRORS } from "../actions/payment_actions";

const sessionErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_EXPENSE_ERRORS:
      return action.errors;
    case RECEIVE_FRIEND_ERRORS:
      return action.errors;
    case RECEIVE_PAYMENT_ERRORS:
      return action.errors;
    case REMOVE_SESSION_ERRORS:
      return [];
    default:
      return oldState;
  }
}

export default sessionErrorsReducer;