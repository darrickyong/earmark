import { combineReducers } from "redux";
import usersReducer from "../reducers/users_reducer";
import expensesReducer from "../reducers/expenses_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  expenses: expensesReducer
})

export default entitiesReducer;