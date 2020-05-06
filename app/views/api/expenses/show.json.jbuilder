json.expense do
  json.partial! "/api/expenses/expense", expense: @expense
end

json.transactions do
  @transactions.each do |transaction|
    json.set! transaction.id do
      json.partial! "/api/transactions/transaction", transaction: transaction
    end
  end
end