import { connect } from "react-redux";
import PaymentIndexItem from "./payment_index_item";
import { deletePayment } from "../../actions/payment_actions";

const mapStateToProps = (state, ownProps) => {
  return ({
    friends: state.entities.friendships,
    currentUser: state.entities.users[state.session.id],
  })
}

const mapDispatchToProps = dispatch => ({
  deletePayment: paymentId => dispatch(deletePayment(paymentId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentIndexItem)