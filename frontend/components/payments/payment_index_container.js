import { connect } from "react-redux";
import PaymentIndex from "./payment_index";
import { fetchFriendships } from "../../actions/friendship_actions";
import { fetchPayments } from "../../actions/payment_actions";

const mapStateToProps = (state, ownProps) => ({
  payments: Object.values(state.entities.payments),
})

const mapDispatchToProps = dispatch => ({
  fetchPayments: () => dispatch(fetchPayments())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentIndex)