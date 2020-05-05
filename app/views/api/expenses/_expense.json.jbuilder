json.extract! expense, :id, :name, :amount, :owner_id, :date
json.owner expense.owner.name
json.transactions expense.transaction_ids