export const selectTransactions = (state, expense) => {
  const trans = [];
  expense.transactions.forEach( transactionId => {
    // debugger
    trans.push(state.entities.transactions[transactionId])
  })
  return trans;
}
