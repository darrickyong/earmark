export const fetchExpenses = () => (
  $.ajax({
    url: "/api/expenses"
  })
)

export const fetchExpense = expenseId => (
  $.ajax({
    url: `/api/expenses/${expenseId}`
  })
)

export const createExpense = expense => (
  $.ajax({
    url: "/api/expenses",
    method: "POST",
    data: { expense }
  })
)

export const updateExpense = expense => (
  $.ajax({
    url: `/api/expenses/${expense.id}`,
    method: "PATCH",
    data: { expense }
  })
)

export const deleteExpense = expenseId => (
  $.ajax({
    url: `/api/expenses/${expenseId}`,
    method: "DELETE"
  })
)