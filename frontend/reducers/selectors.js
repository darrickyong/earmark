export const selectTransactions = (state, expense) => {
  const trans = [];
  expense.transactions.forEach( transactionId => {
    trans.push(state.entities.transactions[transactionId])
  })
  return trans;
}

export const selectFriendExpenses = (state, friendshipId) => {
  const friendExpenses = [];
  if (!state.entities.friendships[friendshipId]) {
    return friendExpenses;
  }
  const friendId = state.entities.friendships[friendshipId].friendUserId;

  Object.values(state.entities.expenses).forEach( expense => {
    if (expense.owner_id === friendId || (expense.split[friendId]) && expense.owner_id === state.session.id) {
      friendExpenses.push(expense)
    }
  })
  return friendExpenses;
}