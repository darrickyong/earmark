import * as PaymentApiUtil from "../util/payment_api_util";

export const RECEIVE_PAYMENTS = "RECEIVE_PAYMENTS";
export const RECEIVE_PAYMENT = "RECEIVE_PAYMENT";
export const REMOVE_PAYMENT = "REMOVE_PAYMENT";
export const RECEIVE_PAYMENT_ERRORS = "RECEIVE_PAYMENT_ERRORS";

const receivePayments = payments => ({
  type: RECEIVE_PAYMENTS,
  payments
})

const receivePayment = payment => ({
  type: RECEIVE_PAYMENT,
  payment
})

const removeExpense = paymentId => ({
  type: REMOVE_PAYMENT,
  paymentId
})

const receivePaymentErrors = errors => ({
  type: RECEIVE_PAYMENT_ERRORS,
  errors
})

export const fetchPayments = () => dispatch => PaymentApiUtil.fetchPayments()
  .then(payments => dispatch(receivePayments(payments)));

export const fetchPayment = paymentId => dispatch => PaymentApiUtil.fetchPayment(paymentId)
  .then(payment => dispatch(receivePayment(payment)));

export const createPayment = payment => dispatch => PaymentApiUtil.createPayment(payment)
  .then(payment => dispatch(receivePayment(payment)),
    errors => dispatch(receivePaymentErrors(errors.responseJSON)));

export const updatePayment = payment => dispatch => PaymentApiUtil.updatePayment(payment)
  .then(payment => dispatch(receivePayment(payment)),
    errors => dispatch(receivePaymentErrors(errors.responseJSON)));

export const deletePayment = paymentId => dispatch => PaymentApiUtil.deletePayment(paymentId)
  .then(() => dispatch(removeExpense(paymentId)),
    errors => dispatch(receivePaymentErrors(errors.responseJSON)));