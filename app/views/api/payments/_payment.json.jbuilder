json.extract! payment, :id, :amount, :payee_id, :payer_id, :date
json.set! :payer, payment.payer.name
json.set! :payee, payment.receiver.name