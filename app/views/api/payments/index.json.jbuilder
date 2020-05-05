@payments.each do |payment|
  json.set! payment.id do
    json.partial! "/api/payments/payment", payment: payment
    json.set! :payer, payment.payer.name
    json.set! :payee, payment.receiver.name
  end
end