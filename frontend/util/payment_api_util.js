export const fetchPayments = () => (
  $.ajax({
    url: "/api/payments"
  })
)

export const fetchPayment = paymentId => (
  $.ajax({
    url: `/api/payments/${paymentId}`
  })
)

export const createPayment = payment => (
  $.ajax({
    url: "/api/payments",
    method: "POST",
    data: {
      payment
    }
  })
)

export const updatePayment = payment => (
  $.ajax({
    url: `/api/payments/${payment.id}`,
    method: "PATCH",
    data: {
      payment
    }
  })
)

export const deletePayment = paymentId => (
  $.ajax({
    url: `/api/payments/${paymentId}`,
    method: "DELETE"
  })
)