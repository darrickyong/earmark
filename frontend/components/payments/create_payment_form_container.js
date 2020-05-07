import { connect } from "react-redux";
import PaymentForm from "./payment_form";
import { createPayment } from "../../actions/payment_actions";
import { fetchFriendships } from "../../actions/friendship_actions";
import { closeModal } from "../../actions/modal_actions";


const mapStateToProps = (state, ownProps) => ({
  payment: {payee_id: 0, amount: 0, date: ""},
  friends: Object.values(state.entities.friendships),
  errors: state.errors.session,
})

const mapDispatchToProps = dispatch => ({
  createPayment: payment => dispatch(createPayment(payment)),
  fetchFriendships: () => dispatch(fetchFriendships()),
  closeModal: () => dispatch(closeModal()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentForm);