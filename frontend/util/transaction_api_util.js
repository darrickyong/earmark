export const fetchTransactions = () => (
  $.ajax({
    url: "/api/transactions"
  })
)

export const fetchTransaction = transactionId => (
  $.ajax({
    url: `/api/transactions/${transactionId}`
  })
)

export const createTransaction = transactions => (
  $.ajax({
    url: "/api/transactions",
    method: "POST",
    data: { transactions }
  })
)

export const updateTransaction = transaction => (
  $.ajax({
    url: `/api/transactions/${transaction.id}`,
    method: "PATCH",
    data: { transaction }
  })
)

export const deleteTransaction = transactionId => (
  $.ajax({
    url: `/api/transactions/${transactionId}`,
    method: "DELETE"
  })
)