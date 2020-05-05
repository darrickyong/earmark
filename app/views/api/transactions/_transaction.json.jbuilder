json.extract! transaction, :id, :expense_id, :amount, :payer_id
json.payer transaction.payer.name