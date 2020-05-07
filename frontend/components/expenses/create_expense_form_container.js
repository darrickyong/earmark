import { connect } from "react-redux";
import ExpenseForm from "./expense_form";
import { removeErrors } from "../../actions/session_actions";
import { createExpense } from "../../actions/expense_actions";
import { fetchFriendships } from "../../actions/friendship_actions";

import { closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  friends: Object.values(state.entities.friendships),
  currentUser: state.entities.users[state.session.id],
  expense: { name: "", amount: "", date: "", split: [] },
  formType: "Add an expense"
})

const mapDispatchToProps = dispatch => ({
  action: expense => dispatch(createExpense(expense)),
  fetchFriendships: () => dispatch(fetchFriendships()),
  removeErrors: () => dispatch(removeErrors()),
  closeModal: () => dispatch(closeModal())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseForm);