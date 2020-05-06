import { 
  RECEIVE_EXPENSES, 
  RECEIVE_EXPENSE, 
  REMOVE_EXPENSE 
} from "../actions/expense_actions";


const expensesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_EXPENSES:
      return action.payload.expenses;
    case RECEIVE_EXPENSE:
      return Object.assign({}, oldState, {[action.payload.expense.id]: action.payload.expense})
    case REMOVE_EXPENSE:
      let newState = Object.assign({}, oldState);
      delete newState[action.payload.expense.id];
      return newState;
    default:
      return oldState;
  }
}

export default expensesReducer;