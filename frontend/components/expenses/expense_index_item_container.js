import { connect } from "react-redux";
import ExpenseIndexItem from "./expense_index_item";
import { deleteExpense } from "../../actions/expense_actions";

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = dispatch => ({
  deleteExpense: expenseId => dispatch(deleteExpense(expenseId))
})

export default connect(
  null,
  mapDispatchToProps
)(ExpenseIndexItem);