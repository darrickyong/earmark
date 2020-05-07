import { connect } from "react-redux";
import PaymentIndex from "./payment_index";
import { fetchFriendships } from "../../actions/friendship_actions";
import { fetchPayments, deletePayment } from "../../actions/payment_actions";

const mapStateToProps = (state, ownProps) => ({
  payments: Object.values(state.entities.payments),
  currentUser: state.entities.users[state.session.id],
})

const mapDispatchToProps = dispatch => ({
  fetchPayments: () => dispatch(fetchPayments()),
  fetchFriendships: () => dispatch(fetchFriendships()),
  deletePayment: paymentId => dispatch(deletePayment(paymentId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentIndex)