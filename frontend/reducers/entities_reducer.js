import { combineReducers } from "redux";
import usersReducer from "../reducers/users_reducer";
import expensesReducer from "../reducers/expenses_reducer";
import friendshipsReducer from "../reducers/friendships_reducer";
import paymentsReducer from "./payments_reducer";
import transactionsReducer from "./transactions_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  friendships: friendshipsReducer,
  expenses: expensesReducer,
  transactions: transactionsReducer,
  payments: paymentsReducer,
})

export default entitiesReducer;