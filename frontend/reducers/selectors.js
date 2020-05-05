export const selectTransactions = (state, expense) => {
  const trans = [];
  expense.transactions.forEach( transactionId => {
    trans.push(state.entities.transactions[transactionId])
  })
  return trans;
}
