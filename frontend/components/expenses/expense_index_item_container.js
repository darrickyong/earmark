import { connect } from "react-redux";
import ExpenseIndexItem from "./expense_index_item";
import { deleteExpense } from "../../actions/expense_actions";
import { removeErrors } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  currentUser: state.entities.users[state.session.id],
})

const mapDispatchToProps = dispatch => ({
  deleteExpense: expenseId => dispatch(deleteExpense(expenseId)),
  removeErrors: () => dispatch(removeErrors())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseIndexItem);