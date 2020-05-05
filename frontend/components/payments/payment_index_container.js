import { connect } from "react-redux";
import PaymentIndex from "./payment_index";
import { fetchUsers } from "../../actions/session_actions";
import { fetchPayments, deletePayment } from "../../actions/payment_actions";

const mapStateToProps = (state, ownProps) => ({
  payments: Object.values(state.entities.payments),
  currentUser: state.entities.users[state.session.id],
})

const mapDispatchToProps = dispatch => ({
  fetchPayments: () => dispatch(fetchPayments()),
  deletePayment: paymentId => dispatch(deletePayment(paymentId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentIndex)