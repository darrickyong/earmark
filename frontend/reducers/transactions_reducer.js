import { RECEIVE_EXPENSES, RECEIVE_EXPENSE, REMOVE_EXPENSE } from "../actions/expense_actions";

const transactionsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_EXPENSES:
      return action.payload.transactions;
    case RECEIVE_EXPENSE:
      Object.keys(action.payload.transactions).forEach(key => {
        newState[parseInt(key)] = action.payload.transactions[key];
      })
      return newState;
    case REMOVE_EXPENSE:
      Object.keys(action.payload.transactions).forEach(key => {
        delete newState[parseInt(key)];
      })
      return newState;
    default:
      return oldState;
  }
}

export default transactionsReducer;