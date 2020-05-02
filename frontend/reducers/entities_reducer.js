import { combineReducers } from "redux";
import usersReducer from "../reducers/users_reducer";
import expensesReducer from "../reducers/expenses_reducer";
import friendshipsReducer from "../reducers/friendships_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  expenses: expensesReducer,
  friendships: friendshipsReducer
})

export default entitiesReducer;