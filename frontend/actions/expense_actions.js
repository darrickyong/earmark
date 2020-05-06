import * as ExpenseApiUtil from "../util/expense_api_util";

export const RECEIVE_EXPENSES = "RECEIVE_EXPENSES";
export const RECEIVE_EXPENSE = "RECEIVE_EXPENSE";
export const REMOVE_EXPENSE = "REMOVE_EXPENSE";
export const RECEIVE_EXPENSE_ERRORS = "RECEIVE_EXPENSE_ERRORS";

const receiveExpenses = payload => ({
  type: RECEIVE_EXPENSES,
  payload
})

const receiveExpense = payload => ({
  type: RECEIVE_EXPENSE,
  payload
})

const removeExpense = payload => ({
  type: REMOVE_EXPENSE,
  payload
})

const receiveExpenseErrors = errors => ({
    type: RECEIVE_EXPENSE_ERRORS,
    errors
})

export const fetchExpenses = () => dispatch => ExpenseApiUtil.fetchExpenses()
  .then( payload => dispatch(receiveExpenses(payload)));

export const fetchExpense = expenseId => dispatch => ExpenseApiUtil.fetchExpense(expenseId)
  .then( expense => dispatch(receiveExpense(expense)));

export const createExpense = expense => dispatch => ExpenseApiUtil.createExpense(expense)
  .then( payload => dispatch(receiveExpense(payload)),
    errors => dispatch(receiveExpenseErrors(errors.responseJSON)));

export const updateExpense = expense => dispatch => ExpenseApiUtil.updateExpense(expense)
  .then( expense => dispatch(receiveExpense(expense)),
    errors => dispatch(receiveExpenseErrors(errors.responseJSON)));

export const deleteExpense = expenseId => dispatch => ExpenseApiUtil.deleteExpense(expenseId)
  .then( (payload) => dispatch(removeExpense(payload)),
  errors => dispatch(receiveExpenseErrors(errors.responseJSON)));