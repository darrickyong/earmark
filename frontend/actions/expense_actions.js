import * as ExpenseApiUtil from "../util/expense_api_util";

export const RECEIVE_EXPENSES = "RECEIVE_EXPENSES";
export const RECEIVE_EXPENSE = "RECEIVE_EXPENSE";
export const REMOVE_EXPENSE = "REMOVE_EXPENSE";
export const RECEIVE_EXPENSE_ERRORS = "RECEIVE_EXPENSE_ERRORS";

const receiveExpenses = expenses => ({
  type: RECEIVE_EXPENSES,
  expenses
})

const receiveExpense = expense => ({
  type: RECEIVE_EXPENSE,
  expense
})

const removeExpense = expenseId => ({
  type: REMOVE_EXPENSE,
  expenseId
})

const receiveExpenseErrors = errors => ({
  type: RECEIVE_EXPENSE_ERRORS,
  errors
})

export const fetchExpenses = () => dispatch => ExpenseApiUtil.fetchExpenses()
  .then( expenses => dispatch(receiveExpenses(expenses)));

export const fetchExpense = expenseId => dispatch => ExpenseApiUtil.fetchExpense(expenseId)
  .then( expense => dispatch(receiveExpense(expense)));

export const createExpense = expense => dispatch => ExpenseApiUtil.createExpense(expense)
  .then( expense => dispatch(receiveExpense(expense)));

export const updateExpense = expense => dispatch => ExpenseApiUtil.updateExpense(expense)
  .then( expense => dispatch(receiveExpense(expense)));

export const deleteExpense = expenseId => dispatch => ExpenseApiUtil.deleteExpense(expenseId)
  .then( () => dispatch(removeExpense(expenseId)));