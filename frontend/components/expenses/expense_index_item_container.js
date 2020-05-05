import { connect } from "react-redux";
import ExpenseIndexItem from "./expense_index_item";
import { deleteExpense } from "../../actions/expense_actions";

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
})

const mapDispatchToProps = dispatch => ({
  deleteExpense: expenseId => dispatch(deleteExpense(expenseId)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseIndexItem);