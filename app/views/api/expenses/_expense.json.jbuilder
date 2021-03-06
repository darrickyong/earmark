# json.extract! expense, :id, :name, :amount, :owner_id, :date
# json.owner expense.owner.name
# json.transactions expense.transaction_ids

# transAmt = 0
# expense.transactions.each do |transaction|
#   transAmt += transaction.amount
# end
# json.transAmt transAmt


json.extract! expense, :id, :name, :amount, :owner_id, :date
json.owner expense.owner.name
json.transactions expense.transaction_ids

split = {}
expense.transactions.each do |transaction|
  split[transaction.payer_id] = transaction.amount
end
json.split split

transAmt = 0
expense.transactions.each do |transaction|
  transAmt += transaction.amount
end

json.transAmt transAmt