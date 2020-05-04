import * as TransactionApiUtil from "../util/transaction_api_util";

export const RECEIVE_TRANSACTIONS = "RECEIVE_TRANSACTIONS";
export const RECEIVE_TRANSACTION = "RECEIVE_TRANSACTION";
export const REMOVE_TRANSACTION = "REMOVE_TRANSACTION";

const receiveTransactions = transactions => ({
  type: RECEIVE_TRANSACTIONS,
  transactions
})

const receiveTransaction = transactions => ({
  type: RECEIVE_TRANSACTION,
  transactions
})

const removeTransaction = transactionId => ({
  type: REMOVE_TRANSACTION,
  transactionId
})

export const fetchTransactions = () => dispatch => TransactionApiUtil.fetchTransactions()
  .then(transactions => dispatch(receiveTransactions(transactions)));

export const fetchTransaction = transactionId => dispatch => TransactionApiUtil.fetchTransaction(transactionId)
  .then(transaction => dispatch(receiveTransaction(transaction)));

export const createTransaction = transaction => dispatch => TransactionApiUtil.createTransaction(transaction)
  .then(transaction => dispatch(receiveTransaction(transaction)),
    errors => dispatch(receiveTransactionErrors(errors.responseJSON)));

export const updateTransaction = transaction => dispatch => TransactionApiUtil.updateTransaction(transaction)
  .then(transaction => dispatch(receiveTransaction(transaction)),
    errors => dispatch(receiveTransactionErrors(errors.responseJSON)));

export const deleteTransaction = transactionId => dispatch => TransactionApiUtil.deleteTransaction(transactionId)
  .then(() => dispatch(removeTransaction(transactionId)),
    errors => dispatch(receiveTransactionErrors(errors.responseJSON)));