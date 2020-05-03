import {
  RECEIVE_PAYMENTS,
  RECEIVE_PAYMENT,
  REMOVE_PAYMENT
} from "../actions/payment_actions";


const paymentsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_PAYMENTS:
      return action.payments;
    case RECEIVE_PAYMENT:
      return Object.assign({}, oldState, { [action.payment.id]: action.payment })
    case REMOVE_PAYMENT:
      let newState = Object.assign({}, oldState);
      delete newState[action.paymentId];
      return newState;
    default:
      return oldState;
  }
}

export default paymentsReducer;