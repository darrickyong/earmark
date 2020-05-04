import {
  RECEIVE_TRANSACTIONS,
  RECEIVE_TRANSACTION,
  REMOVE_TRANSACTION
} from "../actions/transaction_actions";


const transactionsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_TRANSACTIONS:
      return action.transactions;
    case RECEIVE_TRANSACTION:
      return Object.assign({}, oldState, {
        [action.transaction.id]: action.transaction
      })
    case REMOVE_TRANSACTION:
      let newState = Object.assign({}, oldState);
      delete newState[action.transactionId];
      return newState;
    default:
      return oldState;
  }
}

export default transactionsReducer;